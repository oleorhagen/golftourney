import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

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
          <Grid item xs={6}></Grid>
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
