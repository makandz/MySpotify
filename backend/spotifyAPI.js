import SpotifyWebApi from "spotify-web-api-node";

export default function spotifyAPI(token) {
  let spotifyAPI = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URL
  });

  spotifyAPI.setAccessToken(token);
  return spotifyAPI;
}