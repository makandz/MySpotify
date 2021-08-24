import axios from "axios";
import { useEffect, useState } from "react";
import LoadingCard from "../featured/LoadingCard";
import OtherLoadingCard from "../other-cards/OtherLoadingCard";
import SlidingTabs from "../gust-ui/SlidingTabs";
import TrackCard from "../featured/TrackCard";
import OtherTrackCard from "../other-cards/OtherTrackCard";
import ArtistCard from "../featured/ArtistCard";
import OtherArtistCard from "../other-cards/OtherArtistCard";
import router from "next/router";

export default function TopPage(props) {
  const [cards, setCards] = useState(loadingCards());
  const [period, setPeriod] = useState("short_term");

  function loadingCards() {
    let loading = { 'featured': [], 'other': [] };
    for (let i = 0; i < 6; i++) {
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
      response.data.slice(0, 6).forEach((item, i) => {
        loadedCards.featured.push(
          <div key={i}>
            {props.type === 'tracks' ? <TrackCard songData={item} /> : <ArtistCard artistData={item} /> }
          </div>
        );
      });

      response.data.slice(6).forEach((item, i) => {
        loadedCards.other.push(
          <div key={i + 5}>
            {props.type === 'tracks' ? <OtherTrackCard songData={item} /> : <OtherArtistCard artistData={item} /> }
          </div>
        );
      });

      setCards(loadedCards);
    }, (err) => {
      if (err.response.status === 401)
        router.push('/auth');
      else
        router.push('/');
    });
  }, [period]);

  return (
    <div className="mb-6">
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        {props.title}
      </h1>
      <div className="container px-3 mx-auto pt-6">
        <div className="max-w-8xl mx-auto">
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

          <div className="grid grid-cols-3 gap-4 md:gap-8 lg:grid-cols-6 lg:gap-7 mx-auto my-10">
            {cards.featured}
          </div>

          <div className="mx-auto grid xs:grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {cards.other}
          </div>
        </div>
      </div>
    </div>
  );
}