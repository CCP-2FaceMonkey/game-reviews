import React from "react";

const GameContext = React.createContext({
  user: null,
  setUser: () => {},
  userReview: null,
  setUserReview: () => {},
});

export default GameContext;
