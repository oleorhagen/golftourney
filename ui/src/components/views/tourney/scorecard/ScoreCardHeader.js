import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

export default function ScoreCardHeader() {
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
          <Grid item xs={6}>
            <Typography variant="h3" component="div" align="right">
              Score: 45
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
