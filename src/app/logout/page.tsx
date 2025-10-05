"use client";

import { destroyCookie } from "nookies";
import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    destroyCookie(null, "ms-user-code");
    localStorage.removeItem("ms-user-name");
    localStorage.removeItem("ms-user-img");
    window.location.href = "/";
  }, []);

  return <></>;
}
