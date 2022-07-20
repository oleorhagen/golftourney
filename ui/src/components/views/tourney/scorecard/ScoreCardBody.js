import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import ScoreCardTable from "./ScoreCardTable";

const testData = [
  { par: 5, hcp: 4 },
  { par: 3, hcp: 8 },
  { par: 5, hcp: 8 },
];

export default function ScoreCardBody(props) {
  const scoreCard = props.scorecard;
  console.log("ScoreCardBody mount");
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid container item key="front" xs={6}>
          <ScoreCardTable data={testData} />
        </Grid>
        <Grid container item key="back" xs={6}>
          <ScoreCardTable data={testData} />
        </Grid>
      </Grid>
    </>
  );
}
