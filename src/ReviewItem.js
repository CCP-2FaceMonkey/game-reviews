import React, { useContext, useState } from "react";
import GameContext from "./GameContext";

export default function ReviewItem({ id, header, info, review }) {
  const { user, userReview, setUserReview } = useContext(GameContext);
  const [userInput, setUserInput] = useState("");
  console.log("id", id);
  console.log("userReview", userReview);
  return (
    <>
      <h2>{header}</h2>
      <p>{info}</p>
      <>Metacritic</>
      <p>{review}</p>
      <p>User Review</p>
      {user}
      <input type="text" onChange={(e) => setUserInput(e.target.value)}></input>
      <button
        onClick={() =>
          setUserReview([...userReview, { id, review: userInput }])
        }
      >
        Submit review
      </button>
      {userReview.map((review) => (review.id === id ? review.review : null))}
    </>
  );
}
