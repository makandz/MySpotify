import { getSpotify } from "@/lib/spotify";
import { NextResponse } from "next/server";

const VALID = ["short_term", "medium_term", "long_term"];

export async function GET(_req, { params }) {
  const { period } = await params;
  if (!VALID.includes(period)) {
    return NextResponse.json("Bad time period", { status: 405 });
  }

  try {
    const spotify = getSpotify();
    const data = await spotify.getMyTopTracks({
      limit: 50,
      time_range: period,
    });

    const responseData = data.body.items.map((track) => ({
      name: track.name,
      artist: track.artists?.[0]?.name || "",
      album: track.album?.name || "",
      image: track.album?.images?.[0]?.url || "",
      href: track.album?.external_urls?.spotify || "",
    }));

    return NextResponse.json(responseData);
  } catch {
    return NextResponse.json("Invalid token", { status: 401 });
  }
}
