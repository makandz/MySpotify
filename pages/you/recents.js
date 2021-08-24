import { useEffect, useState } from "react";
import axios from "axios";
import OtherTrackCard from "../../components/other-cards/OtherTrackCard";
import router from "next/router";
import LoadingCard from "../../components/featured/LoadingCard";
import OtherLoadingCard from "../../components/other-cards/OtherLoadingCard";

export default function RecentsPage() {
  const [cards, setCards] = useState(loadingCards());

  function loadingCards() {
    let loading = [];
    for (let i = 0; i < 30; i++) {
      loading.push(
        <div key={i}>
          <OtherLoadingCard />
        </div>
      );
    }

    return loading;
  }

  useEffect(() => {
    axios.get("/api/you/recent").then((response) => {
      let loadedCards = [];
      response.data.forEach((item, i) => {
        loadedCards.push(
          <div key={i}>
            <OtherTrackCard songData={item} />
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
  }, []);

  return (
    <div className="mb-6">
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        Recents
      </h1>
      <div className="container px-3 mx-auto pt-7">
        <div className="max-w-8xl mx-auto">
          <div className="mx-auto grid xs:grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {cards}
          </div>
        </div>
      </div>
    </div>
  )
}