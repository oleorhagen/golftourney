import React, { useState } from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import SelectScoreAutoWidth from "./SelectScoreAutoWidth";
import RomanNumeralScore from "./RomanNumeralScore";
import PointScore from "./PointScore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(hole, par, hcp, hcpe) {
  return { hole, par, hcp, hcpe };
}

// TODO - Now 1 extra stroke is hard-coded
const ScoreCardTable = (props) => {
  const rows = props.data.map(({ id, par, index, extra }) =>
    createData(id, par, index, 1)
  );

  const scores = props.scores;
  const onChange = props.onChange;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hole</TableCell>
              <TableCell align="right">Par</TableCell>
              <TableCell align="right">Hcp</TableCell>
              <TableCell align="right">Hcp+</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.hole}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.hole}
                </TableCell>
                <TableCell align="right">{row.par}</TableCell>
                <TableCell align="right">{row.hcp}</TableCell>
                <TableCell align="right">
                  <RomanNumeralScore number={row.hcpe} />
                </TableCell>
                <TableCell align="right">
                  <SelectScoreAutoWidth onChange={onChange(index)} />
                </TableCell>
                <TableCell align="right">
                  <PointScore
                    par={row.par}
                    hcp={row.hcpe}
                    score={scores[index]}
                    active={scores[index]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ScoreCardTable;
