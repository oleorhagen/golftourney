import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import SelectScoreAutoWidth from "./SelectScoreAutoWidth";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const allowed_scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createData(hole, par, hcp, length, hcpe) {
  return { hole, par, hcp, length, hcpe };
}

const rows = [
  createData(1, 5, 7, 517, "I"),
  createData(2, 3, 18, 144, "II"),
  createData(3, 5, 12, 450, "I"),
  createData(4, 4, 1, 420, "II"),
  createData(5, 3, 5, 301, "III"),
  createData(6, 4, 13, 281, "I"),
  createData(7, 4, 21, 322, "I"),
  createData(8, 4, 8, 412, "II"),
  createData(9, 5, 3, 455, "I"),
];

const ScoreCardTable = (props) => {
  const [score, setScore] = React.useState("");

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hole</TableCell>
              <TableCell align="right">Par</TableCell>
              <TableCell align="right">Hcp</TableCell>
              <TableCell align="right">Length</TableCell>
              <TableCell align="right">Hcp+</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.hole}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.hole}
                </TableCell>
                <TableCell align="right">{row.par}</TableCell>
                <TableCell align="right">{row.hcp}</TableCell>
                <TableCell align="right">{row.length}</TableCell>
                <TableCell align="right">{row.hcpe}</TableCell>
                <TableCell align="right">
                  <SelectScoreAutoWidth />
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
