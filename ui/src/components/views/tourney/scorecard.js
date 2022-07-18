import React from "react";

import { Container, Grid } from "@mui/material";
import { Paper, Typography } from "@mui/material";

import ScoreCardFields from "./scorecardfields";

export const ScoreCard = () => {
  return (
    <>
      <Paper>
        <>
          <Typography variant="h1" component="div" align="center">
            Course:
          </Typography>
        </>
        <>
          <ScoreCardFields />
        </>
        <>
          <Typography variant="h1" component="div" align="center">
            Score:
          </Typography>
        </>
      </Paper>
    </>
  );
};

export default ScoreCard;
