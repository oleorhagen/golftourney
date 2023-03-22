import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import ScoreCardTable from "./ScoreCardTable";

export default function ScoreCardBody(props) {
  const scoreCard = props.scorecard;
  const data = props.data;
  // const hcpExtraStrokes = props.hcpExtraStrokes;
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid container item key="front" xs={6}>
          <ScoreCardTable
            {...props}
            front
            data={data.slice(0, 9)}
            onChange={props.onChangeFront}
            scores={props.scoresFront}
          />
        </Grid>
        <Grid container item key="back" xs={6}>
          <ScoreCardTable
            {...props}
            back
            data={data.slice(9)}
            onChange={props.onChangeBack}
            scores={props.scoresBack}
          />
        </Grid>
      </Grid>
    </>
  );
}
