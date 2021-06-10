import SpotifyWebApi from "spotify-web-api-node"
import config from "../../config";

export default async function tracksAPI(req, res) {
  let spotifyAPI = new SpotifyWebApi({
    clientId: config.clientID,
    clientSecret: config.clientSecret,
    redirectUri: config.redirectURL
  });

  spotifyAPI.setAccessToken(req.cookies['ms-user-code'] || '');

  await spotifyAPI.getMyTopTracks({ 'limit': 50, 'time_range': 'long_term' }).then((data) => {
    let responseData = [];
    console.log(data);
    data.body.items.forEach(track => {
      responseData.push({
        'name': track.name,
        'artist': track.artists[0].name,
        'album': track.album.name,
        'image': track.album.images[0].url
      });
    });
    res.status(200).json(responseData);
  }, () => {
    res.status(401).json("Invalid token");
  });
}
