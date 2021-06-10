import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Cookies from "universal-cookie";
import config from "../config";
import axios from "axios";
import validate from "./api/validate";

export default function Auth() {
  const router = useRouter();
  const cookies  = new Cookies();
  const scopes = 'user-top-read user-read-recently-played';
  const client_id = config.clientID;
  const cookie_config = {
    path: '/',
    maxAge: 3600
  }

  const [status, setStatus] = useState("Just a second..");
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(user);
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
      router.push("/you/tracks");
      return true;
    }, () => {
      cookies.remove('ms-user-code');
      setStatus("Invalid login token? Redirecting you home.."); // maybe redirect back to auth?
      return false;
    });
  }

  useEffect(() => {
    let token = new URLSearchParams(window.location.hash.substr(1)).get('access_token');
    if (token) {
      cookies.set('ms-user-code', token, cookie_config);
      validateToken();
    } else if (cookies.get('ms-user-code')) {
      validateToken();
    } else {
      setStatus("You're being redirected to the Spotify login..")
      window.location.href = 'https://accounts.spotify.com/authorize' +
        '?response_type=token' +
        '&client_id=' + client_id +
        '&scope=' + encodeURIComponent(scopes) +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3000/auth');
    }
  }, []);

  return (
    <p>{status}</p>
  );
}