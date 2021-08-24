import { useEffect } from "react"
import {destroyCookie} from "nookies";

export default function LogoutPage() {
  useEffect(() => {
    destroyCookie(null, 'ms-user-code');
    localStorage.removeItem('ms-user-name');
    localStorage.removeItem('ms-user-img');
    window.location.href = "/";
  }, []);

  return (
    <div className="text-center mt-4">
      <h1 className="font-display font-bold text-xl">Logging you out..</h1>
    </div>
  );
}