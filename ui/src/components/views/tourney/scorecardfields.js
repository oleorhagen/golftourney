import React from "react";

import { Container, Grid } from "@mui/material";
import { Stack, Paper, Typography } from "@mui/material";

import ScoreField from "./scorefield";

import NumberBox from "./NumberBox";

let front_holes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let back_holes = [10, 11, 12, 13, 14, 15, 16, 17, 18];

export const ScoreCardFields = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item container key="front" direction="column" xs={6}>
        {front_holes.map((hole) => (
          <Grid key={hole} item>
            <ScoreField hole={hole} />
          </Grid>
        ))}
        <Stack direction="row">
          <Typography variant="h3" component="div" align="left">
            Front:
          </Typography>
          <NumberBox text="36" />
        </Stack>
      </Grid>
      <Grid item container key="back" direction="column" xs={6}>
        {back_holes.map((hole) => (
          <Grid key={hole} item>
            <ScoreField hole={hole} />
          </Grid>
        ))}
        <Stack direction="row">
          <Typography variant="h3" component="div" align="left">
            Back:
          </Typography>
          <NumberBox text="36" />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ScoreCardFields;
