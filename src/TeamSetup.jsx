import React from "react";

const Team = (props) => {
  const { team, setTeam, teamNumber, color, setColor } = props;

  return (
    <>
      <p>Set name of team {teamNumber}</p>
      <input
        type="text"
        value={team}
        onChange={(e) => {
          setTeam(e.target.value);
        }}
      />
      <p>Set color of team: </p>
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <p style={{ color: color }}>Color: {color}</p>
    </>
  );
};

export default Team;
