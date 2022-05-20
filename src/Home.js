import React, { useContext } from "react";
import Navigation from "./Navigation";
import GameContext from "./GameContext";
import "./App.css";

export default function Home() {
  const { user, setUser } = useContext(GameContext);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <h1>Home!</h1>
          <p>Welcome, {user}</p>
          <p>What is your name:</p>
          <input type="text" onChange={(e) => setUser(e.target.value)}></input>
        </header>
      </div>
    </>
  );
}
