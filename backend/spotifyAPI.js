import SpotifyWebApi from "spotify-web-api-node";
import config from "../config";

export default function spotifyAPI(token) {
  let spotifyAPI = new SpotifyWebApi({
    clientId: config.clientID,
    clientSecret: config.clientSecret,
    redirectUri: config.redirectURL
  });

  spotifyAPI.setAccessToken(token);
  return spotifyAPI;
}