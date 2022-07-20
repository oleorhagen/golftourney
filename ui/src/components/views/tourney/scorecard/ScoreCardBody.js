import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import ScoreCardTable from "./ScoreCardTable";

const testData = [
  // Front
  { par: 5, hcp: 7 },
  { par: 3, hcp: 11 },
  { par: 5, hcp: 5 },
  { par: 4, hcp: 9 },
  { par: 3, hcp: 15 },
  { par: 5, hcp: 13 },
  { par: 3, hcp: 17 },
  { par: 4, hcp: 3 },
  { par: 4, hcp: 1 },
  // Back
  { par: 4, hcp: 16 },
  { par: 3, hcp: 18 },
  { par: 4, hcp: 6 },
  { par: 4, hcp: 14 },
  { par: 3, hcp: 12 },
  { par: 5, hcp: 10 },
  { par: 4, hcp: 8 },
  { par: 5, hcp: 2 },
  { par: 4, hcp: 4 },
];

// Distribute the number of extra strokes on the available holes. Through a
// simple distribution of adding strokes to the hardest holes, then continuing..
function distributeStrokes(n) {
  while (n > 0) {
    // Distribute
  }
}

export default function ScoreCardBody(props) {
  const scoreCard = props.scorecard;
  console.log("ScoreCardBody mount");
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid container item key="front" xs={6}>
          <ScoreCardTable front data={testData.slice(0, 9)} />
        </Grid>
        <Grid container item key="back" xs={6}>
          <ScoreCardTable back data={testData.slice(9)} />
        </Grid>
      </Grid>
    </>
  );
}
