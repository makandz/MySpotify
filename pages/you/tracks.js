import axios from "axios";
import { useEffect, useState } from "react";
import LoadingCard from "../../components/featured/LoadingCard";
import TrackCard from "../../components/featured/TrackCard";
import Navbar from "../../components/navbar/Navbar";
import OtherLoadingCard from "../../components/other-cards/OtherLoadingCard";
import OtherTrackCard from "../../components/other-cards/OtherTrackCard";
import SlidingTabs from "../../components/gust-ui/SlidingTabs";

export default function TracksPage() {
  const [tracks, setTracks] = useState(loadingTracks());
  const [period, setPeriod] = useState("short_term");

  function loadingTracks() {
    let loadingTracks = { 'featured': [], 'other': [] };
    for (let i = 0; i < 5; i++) {
      loadingTracks.featured.push(
        <div key={i}>
          <LoadingCard key={i} />
        </div>
      );
    }

    for (let i = 0; i < 20; i++) {
      loadingTracks.other.push(
        <div key={i + 5}>
          <OtherLoadingCard />
        </div>
      );
    }

    return loadingTracks;
  }

  function onPeriodChange(newPeriod) {
    setTracks(loadingTracks());
    setPeriod(newPeriod);
  }

  useEffect(() => {
    axios.get("/api/you/tracks/" + period).then((response) => {
      let loadedTracks = {'featured': [], 'other': []};
      response.data.slice(0, 5).forEach((track, i) => {
        loadedTracks.featured.push(
          <div key={i}>
            <TrackCard songData={track} />
          </div>
        );
      });

      response.data.slice(5).forEach((track, i) => {
        loadedTracks.other.push(
          <div key={i + 5}>
            <OtherTrackCard songData={track} />
          </div>
        );
      });

      setTracks(loadedTracks);
    }, (err) => {
      console.log(err);
    });
  }, [period]);

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        Top Tracks
      </h1>
      <div className="container mx-auto pt-6">
        <div className="max-w-7xl mx-auto">
          <SlidingTabs
            tabs={[
              {
                label: "Four Weeks",
                value: "short_term",
              }, {
                label: "Six Months",
                value: "medium_term",
              }, {
                label: "All Time",
                value: "long_term"
              }
            ]}
            onChange={(e) => onPeriodChange(e)}
          />

          <h2 className="font-display text-2xl font-bold mt-5">Featured</h2>
          <div className="grid grid-cols-5 gap-8 mx-auto mt-4">
            {tracks.featured}
          </div>

          <h2 className="font-display text-2xl font-bold mt-8">Everything Else</h2>
          <div className="mx-auto mt-2 grid grid-cols-3 gap-5">
            {tracks.other}
          </div>
        </div>

      </div>
    </>
  );
}