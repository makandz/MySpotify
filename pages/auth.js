import { useEffect, useState } from "react"
import axios from "axios"
import { destroyCookie, parseCookies, setCookie } from "nookies";

export default function Auth() {
  const scopes = 'user-top-read user-read-recently-played';
  const cookies = parseCookies();
  const cookie_config = {
    path: '/',
    maxAge: 3600
  }

  const [status, setStatus] = useState("Just a second..");
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      localStorage.setItem('ms-user-name', user.name);
      localStorage.setItem('ms-user-img', user.image);
    }

  }, [user]);

  /**
   * Verifies a token is valid by pinging the server and requesting a response with user info.
   * @returns {Array}
   */
  async function validateToken() {
    await axios.get("/api/validate").then((response) => {
      setUser(response.data);
      window.location.href = "/you/tracks";
      return true;
    }, () => {
      destroyCookie(null, 'ms-user-code');
      setStatus("Redirecting you home.."); // maybe redirect back to auth?
      window.location.href = "/";
      return false;
    });
  }

  useEffect(() => {
    let token = new URLSearchParams(window.location.hash.substr(1)).get('access_token');
    if (token) {
      setCookie(null, 'ms-user-code', token, cookie_config);
      validateToken();
    } else if ({ cookies }.cookies['ms-user-code']) {
      validateToken();
    } else {
      setStatus("Redirecting you to the Spotify login..")
      window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=token' +
        '&client_id=' + process.env.NEXT_PUBLIC_CLIENT_ID +
        '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URL);
    }
  }, []);

  return (
    <div className="text-center mt-4">
      <h1 className="font-display font-bold text-xl">{status}</h1>
    </div>
  );
}