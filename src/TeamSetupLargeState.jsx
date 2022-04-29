import React from "react";

const TeamLarge = (props) => {
  const { gameState, setGameState, teamNumber } = props;
  return (
    <>
      <p>Set name of team {teamNumber}</p>
      <input
        type="text"
        value={gameState.team}
        onChange={(e) => {
          if (teamNumber === 1) {
            setGameState({ ...gameState, team1: e.target.value });
          } else setGameState({ ...gameState, team2: e.target.value });
        }}
      />
      <p>Set color of team: </p>
      <input
        type="text"
        value={gameState.color}
        onChange={(e) => {
          if (teamNumber === 1) {
            setGameState({ ...gameState, color1: e.target.value });
          } else setGameState({ ...gameState, color2: e.target.value });
        }}
      />

      <p style={{ color: gameState.color }}>Color: {gameState.color}</p>
    </>
  );
};

export default TeamLarge;
