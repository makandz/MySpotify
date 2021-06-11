import { useEffect } from "react"
import Cookies from "universal-cookie"

export default function LogoutPage() {
  const cookies = new Cookies();

  useEffect(() => {
    cookies.remove('ms-user-code');
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