import React, { useState } from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";

import { useMutation } from "react-relay";

import "./SelectScoreAutoWidth.css";

const SelectScoreAutoWidthMutation = graphql`
  mutation SelectScoreAutoWidthMutation($holeScore: HoleScoreInput!) {
    createHoleScore(input: { holeScore: $holeScore }) {
      holeScore {
        courseName
        holeNr
        nodeId
        scorerId
        stamp
        strokes
        tournamentId
      }
    }
  }
`;

const maxAcceptableScore = 12;

export default function SelectScoreAutoWidth({
  playerId,
  courseName,
  holeNr,
  tournamentId,
  strokes,
}) {
  const [commitMutation, isMutationInFlight] = useMutation(
    SelectScoreAutoWidthMutation,
  );

  const handleChange = (event) => {
    commitMutation({
      variables: {
        holeScore: {
          scorerId: playerId,
          holeNr: holeNr,
          courseName: courseName,
          strokes: event.target.value,
          tournamentId: tournamentId /* TODO - optional */,
        },
      },
    });
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="score-simple-select-autowidth"
          value={strokes || ""}
          onChange={handleChange}
          label="Score"
          variant="standard"
          IconComponent={() => ""}
        >
          {[...Array(maxAcceptableScore)].map((_, i) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
