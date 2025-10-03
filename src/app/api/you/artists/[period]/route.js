import { NextResponse } from "next/server";
import { getSpotify } from "@/lib/spotify";

const VALID = ["short_term", "medium_term", "long_term"];

export async function GET(_req, { params }) {
  const { period } = params;
  if (!VALID.includes(period)) {
    return NextResponse.json("Bad time period", { status: 405 });
  }

  try {
    const spotify = getSpotify();
    const data = await spotify.getMyTopArtists({ limit: 50, time_range: period });

    const responseData = data.body.items.map((artist) => ({
      name: artist.name,
      image: artist.images?.[0]?.url || "",
      genre: artist.genres?.[0] || "",
      href: artist.external_urls?.spotify || "",
    }));

    return NextResponse.json(responseData);
  } catch {
    return NextResponse.json("Invalid token", { status: 401 });
  }
}