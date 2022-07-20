import React from "react";

import { Container, Grid } from "@mui/material";
import { Paper, Typography, TextField } from "@mui/material";

import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardBody from "./ScoreCardBody";
import ScoreCardFooter from "./ScoreCardFooter";

export const ScoreCard = () => {
  return (
    <>
      <ScoreCardHeader />
      <ScoreCardBody />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
