import axios from "axios";
import { useEffect, useState } from "react";
import LoadingCard from "../featured/LoadingCard";
import Navbar from "../navbar/Navbar";
import OtherLoadingCard from "../other-cards/OtherLoadingCard";
import SlidingTabs from "../gust-ui/SlidingTabs";
import TrackCard from "../featured/TrackCard";
import OtherTrackCard from "../other-cards/OtherTrackCard";
import ArtistCard from "../featured/ArtistCard";
import OtherArtistCard from "../other-cards/OtherArtistCard";

export default function TopPage(props) {
  const [cards, setCards] = useState(loadingCards());
  const [period, setPeriod] = useState("short_term");

  function loadingCards() {
    let loading = { 'featured': [], 'other': [] };
    for (let i = 0; i < 5; i++) {
      loading.featured.push(
        <div key={i}>
          <LoadingCard key={i} />
        </div>
      );
    }

    for (let i = 0; i < 20; i++) {
      loading.other.push(
        <div key={i + 5}>
          <OtherLoadingCard />
        </div>
      );
    }

    return loading;
  }

  function onPeriodChange(newPeriod) {
    setCards(loadingCards());
    setPeriod(newPeriod);
  }

  useEffect(() => {
    axios.get("/api/you/" + props.type + "/" + period).then((response) => {
      let loadedCards = { 'featured': [], 'other': [] };
      response.data.slice(0, 5).forEach((item, i) => {
        loadedCards.featured.push(
          <div key={i}>
            {props.type === 'tracks' ? <TrackCard songData={item} /> : <ArtistCard artistData={item} /> }
          </div>
        );
      });

      response.data.slice(5).forEach((item, i) => {
        console.log(props.type)
        loadedCards.other.push(
          <div key={i + 4}>
            {props.type === 'tracks' ? <OtherTrackCard songData={item} /> : <OtherArtistCard artistData={item} /> }
          </div>
        );
      });

      setCards(loadedCards);
    }, (err) => {
      console.log(err);
    });
  }, [period]);

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        {props.title}
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

          <div className="grid grid-cols-5 gap-8 mx-auto my-10">
            {cards.featured}
          </div>

          <div className="mx-auto grid grid-cols-4 gap-7">
            {cards.other}
          </div>
        </div>

      </div>
    </>
  );
}