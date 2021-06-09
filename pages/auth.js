import { useEffect } from "react"
import { useRouter } from 'next/router'
import Cookies from "universal-cookie";
import config from "../config";

export default function Auth() {
  const router = useRouter();
  const cookies  = new Cookies();
  const scopes = 'user-top-read user-read-recently-played';
  const client_id = config.clientID;

  useEffect(() => {
    let token = new URLSearchParams(window.location.hash.substr(1)).get('access_token');

    if (token) {
      cookies.set('ms-user-code', token, {
        path: '/',
        maxAge: 2 * 604800
      });

      router.push("/you/tracks");
    } else if (cookies.get('ms-user-code')) {
      router.push("/you/tracks");
    } else {
      window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=token' +
        '&client_id=' + client_id +
        '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3000/auth');
    }
  }, []);

  return (
    <p>Just a second..</p>
  );
}