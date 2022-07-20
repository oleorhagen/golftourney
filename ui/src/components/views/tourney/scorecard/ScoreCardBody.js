import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import ScoreCardTable from "./ScoreCardTable";

export default function ScoreCardBody() {
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid container item key="front">
          <ScoreCardTable />
        </Grid>
        <Grid container item key="back">
          <ScoreCardTable />
        </Grid>
      </Grid>
    </>
  );
}
