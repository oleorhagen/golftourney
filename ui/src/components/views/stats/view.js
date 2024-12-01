import React from "react";

import { Container, Paper } from "@mui/material";

import { useOutletContext } from "react-router-dom";

import PlayerScoreChart from "./stats";

const StatsView = () => {
  const { playerId, tournamentId } = useOutletContext();
  return <PlayerScoreChart tournamentId={tournamentId} />;
};

export default StatsView;
