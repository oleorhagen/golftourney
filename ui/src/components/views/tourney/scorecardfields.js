import React from "react";

import { Container, Grid } from "@mui/material";
import { Paper, Typography } from "@mui/material";

import ScoreField from "./scorefield";

let front_holes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let back_holes = [10, 11, 12, 13, 14, 15, 16, 17, 18];

export const ScoreCardFields = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item key="front">
        {front_holes.map((hole) => (
          <Grid key={hole} item>
            <ScoreField hole={hole} />
          </Grid>
        ))}
      </Grid>
      <Grid key="back" item>
        {back_holes.map((hole) => (
          <Grid key={hole} item>
            <ScoreField hole={hole} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ScoreCardFields;
