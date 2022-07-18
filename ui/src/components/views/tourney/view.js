import React from "react";

import { Container, Grid } from "@mui/material";

import ScoreCard from "./scorecard";

export const TourneyView = () => {
  return (
    <>
      <h1>Tourney</h1>
      <ScoreCard />
    </>
  );
};

export default TourneyView;
