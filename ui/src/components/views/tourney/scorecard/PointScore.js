import React from "react";
import { Typography } from "@mui/material";

export default function PointScore({ par, hcp, score, active }) {
  if (!active) {
    return null;
  }

  function points(par, hcp, score) {
    let res = par + hcp - score + 2;
    if (res <= 0) {
      return 0;
    }
    return res;
  }

  return (
    <div>
      <Typography variant="subtitle1">{points(par, hcp, score)}</Typography>
    </div>
  );
}
