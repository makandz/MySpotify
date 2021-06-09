import SpotifyWebApi from "spotify-web-api-node"
import config from "../../config";

export default async (req, res) => {
  let spotifyAPI = new SpotifyWebApi({
    clientId: config.clientID,
    clientSecret: config.clientSecret,
    redirectUri: config.redirectURL
  });

  spotifyAPI.setAccessToken(req.cookies['ms-user-code'] || '');

  await spotifyAPI.getMyTopTracks({'limit': 50}).then((data) => {
    let responseData = [];
    data.body.items.forEach(track => {
      responseData.push({
        'name': track.name,
        'artist': track.artists[0].name,
        'album': track.album.name,
        'image': track.album.images[0].url
      });
    });
    res.status(200).json(responseData);
  }, (err) => {
    res.status(200).json("FAILED");
  });
}
