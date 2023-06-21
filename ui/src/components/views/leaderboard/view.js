import React from "react";

import { Grid, Stack, Typography, Skeleton, Paper } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const rows = ["foo", "bar", "baz", "bat"];

// TODO - Get the players info from the DB
const LeaderBoardView = () => {
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
