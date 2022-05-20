import React, { useContext } from "react";
import ReviewItem from "./ReviewItem";
import Navigation from "./Navigation";
import GameContext from "./GameContext";
import "./App.css";

export default function Reviews() {
  const { games } = useContext(GameContext);
  const reviewItems = games.map((review) => (
    <ReviewItem
      key={review.id}
      id={review.id}
      header={review.name}
      info={review.info}
      review={review.metacritic}
    />
  ));
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <h1>Game Reviews</h1>
          {reviewItems}
        </header>
      </div>
    </>
  );
}
