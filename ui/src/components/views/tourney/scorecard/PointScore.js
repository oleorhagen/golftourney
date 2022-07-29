import React from "react";
import { Typography } from "@mui/material";

export function PointsFromScore(par, hcp, score) {
  let res = par + hcp - score + 2;
  if (res <= 0) {
    return 0;
  }
  return res;
}

export default function PointScore({ par, hcp, score, active }) {
  if (!active) {
    return null;
  }

  return (
    <div>
      <Typography variant="subtitle1">
        {PointsFromScore(par, hcp, score)}
      </Typography>
    </div>
  );
}
