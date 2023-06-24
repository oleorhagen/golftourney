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
      <ScoreCardTable {...props} front data={data} onChange={props.onChange} />
    </>
  );
}
