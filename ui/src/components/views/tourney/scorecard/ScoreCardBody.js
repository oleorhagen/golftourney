import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import ScoreCardTable from "./ScoreCardTable";

export default function ScoreCardBody(props) {
  const scoreCard = props.scorecard;
  const data = props.data;
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid container item key="front" xs={6}>
          <ScoreCardTable
            front
            data={data.slice(0, 9)}
            onChange={props.onChangeFront}
            scores={props.scoresFront}
            {...props}
          />
        </Grid>
        <Grid container item key="back" xs={6}>
          <ScoreCardTable
            back
            data={data.slice(9)}
            onChange={props.onChangeBack}
            scores={props.scoresBack}
            {...props}
          />
        </Grid>
      </Grid>
    </>
  );
}
