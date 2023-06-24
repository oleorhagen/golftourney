import React from "react";

import { Paper } from "@mui/material";

import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

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

function createData(courseId, hole, par, hcp, hcpExtraStrokes, nodes) {
  if (!nodes || nodes.length === 0) {
    console.log(`scoreCardTable: no nodes set...`);
    // TODO panic -> This should never happen
    return { courseId, hole, par, hcp, hcpExtraStrokes };
  }
  console.log(`scoreCardTable: node is set: `);
  console.log(hole, par, hcp, hcpExtraStrokes, nodes);
  console.log(nodes);
  const nodeId = nodes[0].nodeId;
  const strokes = nodes[0].strokes;
  const points = nodes[0].points;
  const hcpe = GetExtraStroke(hcp, hcpExtraStrokes);
  console.log(hcpe);
  return { courseId, hole, par, hcp, hcpe, nodeId, strokes, points };
}

const HandicapFragment = graphql`
  fragment ScoreCardTableHandicapFragment on CourseHandicap {
    courseId
    createdAt
    handicap
    id
    nodeId
    playerId
  }
`;

// TODO - Now 1 extra stroke is hard-coded
const ScoreCardTable = (props) => {
  console.log(`ScoreCardTable props:`);
  console.log(props);

  const data = useFragment(HandicapFragment, props.handicap_fragment);
  console.log(
    `[ScoreCardTable]: got fragment data: ${JSON.stringify(
      props.handicap_fragment,
      4
    )}`
  );
  console.log(`[ScoreCardTable]: data: ${JSON.stringify(data, 4)}`);

  const rows = props.data.map(
    ({ courseId, nr, par, index, extra, scoresByHoleId: { nodes } }) =>
      createData(courseId, nr, par, index, data?.handicap, nodes)
  );

  console.log(`scoreCardTable rows:`);
  console.log(rows);

  rows.sort((a, b) => Number(a.hole) > Number(b.hole));

  const onChange = props.onChange;

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
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
                    playerId={props.playerId}
                    courseId={row.courseId}
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
