import React from "react";

import { Container, FormControl, Grid, Select, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

export default function ScoreCardHeader({
  score,
  points,
  hcp,
  onChangeHcp,
}) {
  return (
    <>
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h3" component="div" align="left">
              Course: Hakadal
            </Typography>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" component="div" align="right">
              Score: {score}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" component="div" align="right">
              Points: {points}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
