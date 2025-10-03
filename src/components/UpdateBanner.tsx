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
        <span className="text-gray-800">
          The website has updated, your data is no longer saved.
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.notion.so/mkn/Big-Update-to-NewTunes-2812894fe3e6804fb5affd07be8ff93a?source=newtunes"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            Learn more →
          </Link>
          <button
            onClick={dismiss}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
