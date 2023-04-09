import React from "react";
import { Typography } from "@mui/material";

export default function PointScore({ par, hcp, score }) {
  return (
    <div>
      <Typography variant="subtitle1">{score}</Typography>
    </div>
  );
}
