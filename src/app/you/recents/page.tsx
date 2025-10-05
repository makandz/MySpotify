"use client";

import OtherLoadingCard from "@/components/other-cards/OtherLoadingCard";
import OtherTrackCard from "@/components/other-cards/OtherTrackCard";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";

type RecentTrack = unknown; // replace with your API type if you have one

export default function RecentsPage() {
  const router = useRouter();
  const [cards, setCards] = useState<JSX.Element[]>(getLoadingCards());

  function getLoadingCards() {
    const loading: JSX.Element[] = [];
    for (let i = 0; i < 50; i++) {
      loading.push(
        <div key={`loading-${i}`}>
          <OtherLoadingCard />
        </div>
      );
    }
    return loading;
  }

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/you/recent", { credentials: "include" });
        if (res.status === 401) {
          router.push("/auth");
          return;
        }
        if (!res.ok) {
          router.push("/");
          return;
        }
        const data: RecentTrack[] = await res.json();
        const loaded = data.map((item, i) => (
          <div key={`recent-${i}`}>
            <OtherTrackCard songData={item} />
          </div>
        ));
        setCards(loaded);
      } catch {
        router.push("/");
      }
    };

    load();
  }, [router]);

  return (
    <div className="mb-6">
      <h1 className="mt-6 text-center font-display text-4xl font-bold">
        Recents
      </h1>
      <div className="container mx-auto px-3 pt-7">
        <div className="mx-auto max-w-8xl">
          <div className="mx-auto grid gap-5 xs:grid-cols-1 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
}
