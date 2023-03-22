import React from "react";
import { Typography } from "@mui/material";

export function PointsFromScore(par, extraHcpStrokes, score) {
  console.log(
    `pointsFromScore: par: ${par}, extraHcpStrokes: ${extraHcpStrokes}, score: ${score}`
  );
  console.log(typeof par);
  console.log(typeof extraHcpStrokes);
  console.log(typeof score);
  let res = Number(par) + extraHcpStrokes - score + 2;
  if (res <= 0) {
    return 0;
  }
  console.log(`PointsFromScore result: ${res}`);
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
