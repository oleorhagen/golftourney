import React from "react";

import { Container, Paper } from "@mui/material";

import { useOutletContext } from "react-router-dom";

import PlayerScoreChart from "./stats";

import PlayerStatisticsRadarChart from "./radarchart/radarchart";

// TODO - Add a AreaChartFillByValue
// https://recharts.org/en-US/examples/AreaChartFillByValue
const StatsView = () => {
  const { playerId, tournamentId } = useOutletContext();
  return (
    <>
      <PlayerScoreChart tournamentId={tournamentId} />
      <PlayerStatisticsRadarChart scorerId={playerId} />
    </>
  );
};

export default StatsView;
