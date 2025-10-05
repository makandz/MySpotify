"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function UpdateBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("updateBannerDismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("updateBannerDismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between text-sm">
        {/* Left: can wrap to multiple lines */}
        <span className="flex-1 min-w-0 text-gray-800">
          🎉 New major update! Check out the new features and improvements.
        </span>

        {/* Right: fixed, no wrap */}
        <div className="flex flex-none items-center gap-4 whitespace-nowrap pl-4">
          <Link
            href="https://www.notion.so/mkn/Big-Update-to-NewTunes-2812894fe3e6804fb5affd07be8ff93a?source=newtunes"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more →
          </Link>
          <button
            onClick={dismiss}
            className="inline-flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
