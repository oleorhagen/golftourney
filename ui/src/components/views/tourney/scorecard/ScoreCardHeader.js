import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

export default function ScoreCardHeader() {
  return (
    <>
      <Grid container direction="row">
        <Grid item>
          <Typography variant="h1" component="div" align="left">
            Course: Hakadal
          </Typography>
          <Typography variant="h3" component="div" align="left">
            Slope:
          </Typography>
          <Typography variant="h3" component="div" align="left">
            Course Handicap
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-select-handicap"
            label="Handicap"
            helperText="Please input your handicap"
            align="right"
          ></TextField>
        </Grid>
      </Grid>
    </>
  );
}
