import React from "react";

import { Container, Grid } from "@mui/material";
import { Paper, Typography, TextField } from "@mui/material";

import ScoreCardFields from "./scorecardfields";

export const ScoreCard = () => {
  return (
    <>
      <Paper>
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
                id="outlined-select-score"
                select
                label="Handicap"
                helperText="Please input your handicap"
                align="right"
              ></TextField>
            </Grid>
          </Grid>
        </>
        <>
          <Paper elevation={2}>
            <ScoreCardFields />
          </Paper>
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
