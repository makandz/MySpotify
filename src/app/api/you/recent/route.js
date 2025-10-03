import { getSpotify } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const spotify = getSpotify();
    const data = await spotify.getMyRecentlyPlayedTracks({ limit: 50 });

    const responseData = data.body.items.map((item) => {
      const t = item.track || {};
      return {
        name: t.name || "",
        artist: t.artists?.[0]?.name || "",
        album: t.album?.name || "",
        image: t.album?.images?.[0]?.url || "",
        href: t.album?.external_urls?.spotify || "",
      };
    });

    return NextResponse.json(responseData);
  } catch {
    return NextResponse.json("Invalid token", { status: 401 });
  }
}