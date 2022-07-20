import React from "react";
import { Typography } from "@mui/material";

export default function RomanNumeralScore(props) {
  console.log(props.number);
  return (
    <div>
      <Typography variant="subtitle1">{"I".repeat(props.number)}</Typography>
    </div>
  );
}
