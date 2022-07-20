import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

export default function ScoreCardHeader() {
  return (
    <>
      <Typography variant="h3" component="div" align="right">
        Score:
      </Typography>
    </>
  );
}
