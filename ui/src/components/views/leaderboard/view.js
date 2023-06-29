import React from "react";

import { Grid, Stack, Typography, Skeleton, Paper } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";

const rows = ["foo", "bar", "baz", "bat"];

const LeaderBoardScoreQuery = graphql`
  query viewLeaderBoardScoreQuery {
    allScores(orderBy: HOLE_ID_DESC) {
      nodes {
        points
        playerId
        holeId
      }
    }
    allCompetitionScores {
      nodes {
        id
        nodeId
        points
        playerId
      }
    }
    allPlayers {
      nodes {
        id
        name
        nodeId
      }
    }
  }
`;

function computeTotalScore(scoreData, playerId) {
  console.log(`computeTotalScore got scoreData: ${JSON.stringify(scoreData)}`);
  let onCoursePoints = scoreData.allScores.nodes
    .filter((node) => node.playerId === playerId)
    .reduce((acc, node) => acc + Number(node.points), 0);
  let competitionPoints = scoreData.allCompetitionScores.nodes
    .filter((node) => node.playerId === playerId)
    .reduce((acc, node) => acc + Number(node.points), 0);
  return onCoursePoints + competitionPoints;
}

function PlayerLeaderBoardTableEntry(props) {
  return (
    <TableRow
      key={props.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center" component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell align="center">{props?.score || "No Score"}</TableCell>
      <TableCell align="center">{props?.position}</TableCell>
    </TableRow>
  );
}

const LeaderBoardView = () => {
  const data = useLazyLoadQuery(LeaderBoardScoreQuery, {
    fetchPolicy: "network-only",
  });
  console.log(`Current leaderboard data: ${JSON.stringify(data)}`);

  if (data) {
    // Create the players sorted  by score
    let playerMap = data.allPlayers.nodes
      .map((row) => {
        return { ...row, score: computeTotalScore(data, row.id) };
      })
      .sort((a, b) => a.score < b.score);
    console.log(`created generated map: ${JSON.stringify(playerMap)}`);
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {["Player", "Score", "Position"].map((n, i) => (
                  <TableCell align="center">{n}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {playerMap.map((player, i) => {
                return (
                  <PlayerLeaderBoardTableEntry
                    name={player.name}
                    playerId={player.id}
                    score={player.score}
                    position={i + 1}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {["Player", "Score", "Position"].map((n, i) => (
                <TableCell align="center">{n}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row}
                </TableCell>
                <TableCell align="center">Bar</TableCell>
                <TableCell align="center">Baz</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LeaderBoardView;
