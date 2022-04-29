import { useState } from "react";
import { useTimer } from "use-timer";
import "./App.css";
import Team from "./TeamSetup";
import TeamName from "./TeamName";
import TeamLarge from "./TeamSetupLargeState";

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#0087ff",
  border: "none",
  borderRadius: "4px",
  margin: "10px",
  color: "white",
};

const editButtonStyle = {
  padding: "10px",
  backgroundColor: "#DDD",
  border: "none",
  borderRadius: "4px",
  margin: "10px",
  color: "black",
};

const initialState = {
  team1: "lid1",
  team2: "",
  editTeams: false,
  color1: "white",
  color2: "black",
  score1: 0,
  score2: 0,
};

function App() {
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 90,
    timerType: "DECREMENTAL",
  });
  //const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [editTeams, setEditTeams] = useState(false);
  //const [color, setColor] = useState("white");
  const [color2, setColor2] = useState("black");

  const [gameState, setGameState] = useState(initialState);
  return (
    <div className="App">
      {/* TODO: Game clock */}
      {/* - haldid utan um tima */}
      {/* - geta buid til tvo lid */}
      {/* - geta sett inn skor og uppfeart */}
      <header className="App-header">
        <h1>GAME CLOCK</h1>
        <div>
          <button style={buttonStyle} onClick={start}>
            Start
          </button>
          <button style={buttonStyle} onClick={pause}>
            Pause
          </button>
          <button style={buttonStyle} onClick={reset}>
            Reset
          </button>
        </div>
        <p>Elapsed time: {time}</p>
        {status === "RUNNING" && <p>Running...</p>}
        <button
          style={editButtonStyle}
          onClick={() => setEditTeams(!editTeams)}
        >
          {!editTeams ? "Edit teams" : "Close"}
        </button>
        <TeamName
          team={gameState.team1}
          teamNumber={1}
          color={gameState.color1}
        />
        Score: {!Number.isNaN(gameState.score1) ? gameState.score1 : null}
        <input
          type="number"
          value={parseInt(gameState.score1)}
          onChange={(e) => {
            setGameState({ ...gameState, score1: parseInt(e.target.value) });
          }}
        ></input>
        <button
          onClick={() => {
            setGameState({ ...gameState, score1: gameState.score1 + 1 });
          }}
        >
          plus +
        </button>
        <button
          onClick={() =>
            setGameState({ ...gameState, score1: gameState.score1 - 1 })
          }
        >
          minus -
        </button>
        <TeamName team={team2} teamNumber={2} color={color2} />
        Score: {!Number.isNaN(gameState.score1) ? gameState.score2 : null}
        <input
          type="number"
          value={parseInt(gameState.score2)}
          onChange={(e) => {
            setGameState({ ...gameState, score2: parseInt(e.target.value) });
          }}
        ></input>
        <button
          onClick={() =>
            setGameState({ ...gameState, score2: gameState.score2 + 1 })
          }
        >
          plus +
        </button>
        <button
          onClick={() =>
            setGameState({ ...gameState, score2: gameState.score2 - 1 })
          }
        >
          minus -
        </button>
        {editTeams ? (
          <TeamLarge
            gameState={gameState}
            setGameState={setGameState}
            teamNumber={1}
          />
        ) : null}
        {editTeams ? (
          <Team
            team={team2}
            setTeam={setTeam2}
            teamNumber={2}
            color={color2}
            setColor={setColor2}
          />
        ) : null}
      </header>
    </div>
  );
}

export default App;
