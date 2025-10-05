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
  const [status, setStatus] = useState("Just a moment..");
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
      setStatus("Taking you home...");
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

    setStatus("Taking you to Spotify...");
    const authorizeUrl =
      "https://accounts.spotify.com/authorize" +
      `?response_type=token` +
      `&client_id=${encodeURIComponent(String(clientId))}` +
      `&scope=${encodeURIComponent(SCOPES)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}`;

    window.location.href = authorizeUrl;
  }, [validateToken]); // run once on mount

  return (
    <div className="flex items-center justify-center py-16 px-6">
      {/* Left: animated loader */}
      <div className="mr-6 h-12 w-12 flex-shrink-0">
        <div className="loader" />
      </div>

      {/* Right: text */}
      <div className="text-left">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
          {status}
        </h1>
        <p className="mt-1 text-base text-gray-600">
          This only takes a few seconds.
        </p>
      </div>

      <style jsx>{`
        .loader {
          width: 40px;
          aspect-ratio: 1;
          --c: linear-gradient(#000 0 0); /* gray-400 to match your cards */
          --r1: radial-gradient(farthest-side at bottom, #000 93%, #0000);
          --r2: radial-gradient(farthest-side at top, #000 93%, #0000);
          background: var(--c), var(--r1), var(--r2), var(--c), var(--r1),
            var(--r2), var(--c), var(--r1), var(--r2);
          background-repeat: no-repeat;
          animation: bars 1s infinite alternate;
        }

        @keyframes bars {
          0%,
          25% {
            background-size: 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px,
              8px 0, 8px 4px, 8px 4px;
            background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px),
              50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%,
              100% calc(50% - 2px), 100% calc(50% + 2px);
          }
          50% {
            background-size: 8px 100%, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px,
              8px 0, 8px 4px, 8px 4px;
            background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px),
              50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%,
              100% calc(50% - 2px), 100% calc(50% + 2px);
          }
          75% {
            background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px,
              8px 4px, 8px 0, 8px 4px, 8px 4px;
            background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px),
              50% 50%, 50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%,
              100% calc(50% - 2px), 100% calc(50% + 2px);
          }
          95%,
          100% {
            background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px,
              8px 4px, 8px 100%, 8px 4px, 8px 4px;
            background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px),
              50% 50%, 50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%,
              100% calc(0% - 2px), 100% calc(100% + 2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
