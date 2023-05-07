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

// Get the extra stroke
function GetExtraStroke(hole, NumberOfExtraStrokes) {
  if (!NumberOfExtraStrokes) {
    console.log("No Extra Strokes set!");
    return 0;
  }
  const holeN = Number(hole);
  const NumberOfExtraStrokesN = Number(NumberOfExtraStrokes);
  var extraStrokes = Math.floor(NumberOfExtraStrokesN / 18);
  if (holeN <= NumberOfExtraStrokesN % 18) {
    extraStrokes = extraStrokes + 1;
  }
  console.log(`giving ${extraStrokes} strokes`);
  return extraStrokes;
}

function createData(hole, par, hcp, hcpExtraStrokes, nodes) {
  if (!nodes || nodes.length === 0) {
    console.log(`scoreCardTable: no nodes set...`);
    // TODO panic -> This should never happen
    return { hole, par, hcp, hcpExtraStrokes };
  }
  console.log(`scoreCardTable: node is set: `);
  console.log(hole, par, hcp, hcpExtraStrokes, nodes);
  console.log(nodes);
  const nodeId = nodes[0].nodeId;
  const strokes = nodes[0].strokes;
  const points = nodes[0].points;
  const hcpe = GetExtraStroke(hcp, hcpExtraStrokes);
  console.log(hcpe);
  return { hole, par, hcp, hcpe, nodeId, strokes, points };
}

// TODO - Now 1 extra stroke is hard-coded
const ScoreCardTable = (props) => {
  console.log(`ScoreCardTable props:`);
  console.log(props);
  const rows = props.data.map(
    ({ id, par, index, extra, scoresByHoleId: { nodes } }) =>
      createData(id, par, index, props.extraStrokes, nodes)
  );

  console.log(`scoreCardTable rows:`);
  console.log(rows);

  const onChange = props.onChange;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hole</TableCell>
              {["Par", "Hcp", "Hcp+", "Score", "Points"].map(
                (cellText, idx) => (
                  <TableCell key={idx}>{cellText}</TableCell>
                )
              )}
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
                    par={row.par}
                    hcpe={row.hcpe}
                  />
                </TableCell>
                <TableCell align="right">
                  <PointScore par={row.par} hcp={row.hcpe} score={row.points} />
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
