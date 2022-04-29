import React from "react";

const TeamName = ({ team, teamNumber, color }) => {
  return (
    <>
      <h3 style={{ color: color }}>
        Team {teamNumber}: {team}
      </h3>
    </>
  );
};

export default TeamName;
