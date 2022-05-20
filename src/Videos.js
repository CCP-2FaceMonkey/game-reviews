import React, { useContext } from "react";
import GameContext from "./GameContext";
import Navigation from "./Navigation";
import "./App.css";

export default function Videos() {
  const { user, userReview } = useContext(GameContext);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <h1>Videos!</h1>
          User: {user}
          {userReview.map((review) => (
            <p>{review.review}</p>
          ))}
        </header>
      </div>
    </>
  );
}
