import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

export default function ScoreCardHeader({ score, points }) {
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
            <TextField
              id="outlined-select-handicap"
              label="Handicap"
              required
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" component="div" align="left">
              Slope:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-handicap"
              label="Tee"
              required
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" component="div" align="left">
              Course Hcp:
            </Typography>
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
