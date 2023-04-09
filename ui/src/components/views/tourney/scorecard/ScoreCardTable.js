import React from "react";

import { Paper } from "@mui/material";

import SelectScoreAutoWidth from "./SelectScoreAutoWidth";
import RomanNumeralScore from "./RomanNumeralScore";
import PointScore from "./PointScore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(hole, par, hcp, hcpe, nodes) {
  if (!nodes || nodes.length === 0) {
    console.log(`scoreCardTable: no nodes set...`);
    // TODO panic -> This should never happen
    return { hole, par, hcp, hcpe };
  }
  console.log(`scoreCardTable: node is set: `);
  console.log(hole, par, hcp, hcpe, nodes);
  console.log(nodes);
  const nodeId = nodes[0].nodeId;
  const strokes = nodes[0].strokes;
  return { hole, par, hcp, hcpe, nodeId, strokes };
}

// TODO - Now 1 extra stroke is hard-coded
const ScoreCardTable = (props) => {
  const rows = props.data.map(
    ({ id, par, index, extra, scoresByHoleId: { nodes } }) =>
      createData(id, par, index, 1, nodes)
  );

  console.log(`scoreCardTable rows:`);
  console.log(rows);

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
                  <SelectScoreAutoWidth
                    onChange={onChange(index)}
                    holeNumber={row.hole}
                    nodeId={row.nodeId}
                    strokes={row.strokes}
                  />
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
