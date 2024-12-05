import React from "react";

import { Container, Paper } from "@mui/material";

import { useOutletContext } from "react-router-dom";

import PlayerScoreChart from "./stats";

import PlayerRadarChart from "./radarchart/radarchart";

const StatsView = () => {
  const { playerId, tournamentId } = useOutletContext();
  return (
    <>
      <PlayerScoreChart tournamentId={tournamentId} />
      <PlayerRadarChart />
    </>
  );
};

export default StatsView;
