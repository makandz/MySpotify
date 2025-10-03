import { getSpotify } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const spotify = getSpotify();
    const data = await spotify.getMe();
    const resBody = data.body;

    return NextResponse.json({
      id: resBody.id,
      name: resBody.display_name,
      image: resBody.images?.length > 0 ? resBody.images[0].url : "",
    });
  } catch {
    return NextResponse.json("Invalid token", { status: 401 });
  }
}
