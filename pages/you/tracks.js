import axios from "axios";
import { useState } from "react";
import LoadingCard from "../../components/featured/LoadingCard";
import TrackCard from "../../components/featured/TrackCard";
import Navbar from "../../components/navbar/Navbar";
import OtherLoadingCard from "../../components/other-cards/OtherLoadingCard";
import OtherTrackCard from "../../components/other-cards/OtherTrackCard";

export default function TracksPage() {
  const [tracks, setTracks] = useState(null);

  axios.get("/api/tracks").then((response) => {
    setTracks(response.data);
  }, (err) => {
    console.log(err);
  });

  let featuredRender = [];
  let otherTracks = [];
  if (tracks === null) {
    for (let i = 0; i < 5; i++) {
      featuredRender.push(
        <div className="">
          <LoadingCard key={i} />
        </div>
      );
    }

    for (let i = 0; i < 20; i++) {
      otherTracks.push(
        <div>
          <OtherLoadingCard key={i} />
        </div>
      );
    }
  } else {
    tracks.slice(0, 5).forEach((track, i) => {
      featuredRender.push(
        <div>
          <TrackCard songData={track} key={i} />
        </div>
      );
    });

    tracks.slice(5).forEach((track, i) => {
      otherTracks.push(
        <div>
          <OtherTrackCard songData={track} key={i} />
        </div>
      );
    });
  }

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        Top Tracks
      </h1>
      <div className="container mx-auto pt-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold">Featured</h2>
          <div className="grid grid-cols-5 gap-8 mx-auto mt-4">
            {featuredRender}
          </div>

          <h2 className="font-display text-2xl font-bold mt-8">Everything Else</h2>
        
          <div className="mx-auto mt-2 grid grid-cols-3 gap-5">
            {otherTracks}
          </div>
        </div>

      </div>
    </>
  );
}