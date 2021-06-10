import SpotifyWebApi from "spotify-web-api-node";
import config from "../../config";

export default async function validateAPI(req, res) {
  let spotifyAPI = new SpotifyWebApi({
    clientId: config.clientID,
    clientSecret: config.clientSecret,
    redirectUri: config.redirectURL
  });

  spotifyAPI.setAccessToken(req.cookies['ms-user-code'] || '');

  await spotifyAPI.getMe().then((data) => {
    let resBody = data.body;
    res.status(200).json({
      'id': resBody.id,
      'name': resBody.display_name,
      'image': resBody.images[0].url
    });
  }, () => {
    res.status(401).json("Invalid token");
  });
}
