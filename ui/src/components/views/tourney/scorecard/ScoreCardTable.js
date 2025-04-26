import React from "react";

import { Paper, Typography } from "@mui/material";

import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import SelectScoreAutoWidth from "./SelectScoreAutoWidth";
import RomanNumeralScore from "./RomanNumeralScore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function PointScore({ score }) {
  return (
    <div>
      <Typography variant="subtitle1">{score}</Typography>
    </div>
  );
}

const ScoreCardTable = ({ scorerId, scorecardId, courseName, holes }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hole</TableCell>
            {["Par", "Hcp", "Extra", "Strokes", "Points"].map(
              (cellText, idx) => (
                <TableCell key={idx}>{cellText}</TableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {holes.map((row, index) => (
            <TableRow
              key={row.holeNr}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.holeNr}
              </TableCell>
              <TableCell align="right">{row.par}</TableCell>
              <TableCell align="right">{row.holeIndex}</TableCell>
              <TableCell align="right">
                <RomanNumeralScore number={row.extraStrokes} />
              </TableCell>
              <TableCell align="right">
                <SelectScoreAutoWidth
                  scorerId={scorerId}
                  courseName={courseName}
                  holeNr={row.holeNr}
                  scorecardId={scorecardId}
                  hole={row.holeScoresByHoleNrAndCourseName?.nodes?.[0]}
                />
              </TableCell>
              <TableCell align="right">
                <PointScore score={row.points} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreCardTable;
