import { cookies } from "next/headers";
import SpotifyWebApi from "spotify-web-api-node";

export function getSpotify() {
  const token = cookies().get("ms-user-code")?.value ?? "";

  const spotify = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URL,
  });

  spotify.setAccessToken(token);
  return spotify;
}
