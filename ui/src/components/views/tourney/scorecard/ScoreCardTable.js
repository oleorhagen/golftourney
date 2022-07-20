import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import SelectScoreAutoWidth from "./SelectScoreAutoWidth";
import RomanNumeralScore from "./RomanNumeralScore";

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

const ScoreCardTable = (props) => {
  console.log("props");
  console.log(props);
  const [score, setScore] = React.useState("");

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  function addBack(n) {
    if (props.back) {
      return n + 9;
    }
    return n;
  }

  const rows = props.data.map(({ par, hcp }, index) =>
    createData(addBack(index) + 1, par, hcp, 500, par)
  );
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
                <TableCell align="right">
                  <RomanNumeralScore number={row.hcpe} />
                </TableCell>
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
