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
            {["Par", "Index", "Extra", "Strokes", "Points"].map(
              (cellText, idx) => (
                <TableCell key={idx}>{cellText}</TableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {holes.map((hole, index) => (
            <TableRow
              key={hole.nr}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="hole">
                {hole.nr}
              </TableCell>
              <TableCell align="center">{hole.par}</TableCell>
              <TableCell align="center">{hole.index}</TableCell>
              <TableCell align="center">
                <RomanNumeralScore number={hole.extra_strokes} />
              </TableCell>
              <TableCell align="center">
                <SelectScoreAutoWidth
                  scorerId={scorerId}
                  courseName={courseName}
                  holeNr={hole.nr}
                  scorecardId={scorecardId}
                  hole={hole.holeScoresByHoleNrAndCourseName?.nodes?.[0]}
                />
              </TableCell>
              <TableCell align="center">
                <PointScore score={hole.points} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreCardTable;
