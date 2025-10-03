// app/auth/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type User = {
  name: string;
  image: string;
};

const SCOPES = "user-top-read user-read-recently-played";

// Simple cookie helpers for client components
function setCookie(name: string, value: string, maxAgeSeconds = 3600) {
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAgeSeconds}`;
}
function getCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}
function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0`;
}

export default function AuthPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Just a second..");
  const [user, setUser] = useState<User | null>(null);

  // Persist user info for later use in the app
  useEffect(() => {
    if (user) {
      localStorage.setItem("ms-user-name", user.name);
      localStorage.setItem("ms-user-img", user.image);
    }
  }, [user]);

  const validateToken = useCallback(async () => {
    try {
      const res = await fetch("/api/validate", { credentials: "include" });
      if (!res.ok) throw new Error("Invalid token");
      const data = (await res.json()) as User;
      setUser(data);
      router.replace("/you/tracks");
      return true;
    } catch {
      deleteCookie("ms-user-code");
      setStatus("Redirecting you home..");
      router.replace("/");
      return false;
    }
  }, [router]);

  useEffect(() => {
    // 1) If redirected back from Spotify with an access token in the hash
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const tokenFromHash = new URLSearchParams(hash.replace(/^#/, "")).get(
      "access_token"
    );

    if (tokenFromHash) {
      setCookie("ms-user-code", tokenFromHash, 3600);
      validateToken();
      return;
    }

    // 2) If we already have a cookie, try validating it
    const cookieToken = getCookie("ms-user-code");
    if (cookieToken) {
      validateToken();
      return;
    }

    // 3) Otherwise, send the user to Spotify login
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const redirectUri =
      process.env.NEXT_PUBLIC_REDIRECT_URL ?? `${window.location.origin}/auth`;

    setStatus("Redirecting you to the Spotify login..");
    const authorizeUrl =
      "https://accounts.spotify.com/authorize" +
      `?response_type=token` +
      `&client_id=${encodeURIComponent(String(clientId))}` +
      `&scope=${encodeURIComponent(SCOPES)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authorizeUrl;
  }, [validateToken]); // run once on mount

  return (
    <div className="text-center mt-4">
      <h1 className="font-display font-bold text-xl">{status}</h1>
    </div>
  );
}
