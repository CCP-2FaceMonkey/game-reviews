import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";
import Navigation from "./Navigation";
import Home from "./Home";
import Videos from "./Videos";
import GameContext from "./GameContext";
import "./App.css";

function App() {
  const [user, setUser] = useState("harley");
  const [userReview, setUserReview] = useState([]);
  const [games, setGames] = useState([]);
  //const baseURL = "https://api.rawg.io/api/games";
  const config = {
    async: true,
    crossDomain: true,
    url: "https://rawg-video-games-database.p.rapidapi.com/games?key=a4108267f3fa46f3911b8d52738b1b9e",
    method: "GET",
    headers: {
      "x-rapidapi-key": "e6ef05302emsh9c46dd59d7ac5d1p13a2d8jsneb37aae7d452",
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    },
  };
  console.log("url", config.url);
  React.useEffect(() => {
    axios.get(`${config.url}`, config).then((response) => {
      setGames(response.data.results);
    });
  }, []);
  console.log("games", games);
  return (
    <GameContext.Provider
      value={{
        user,
        setUser,
        userReview,
        setUserReview,
        games,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="videos" element={<Videos />} />
      </Routes>
    </GameContext.Provider>
  );
}

export default App;
