import React, { useState } from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";

import { useMutation, useFragment } from "react-relay";

import "./SelectScoreAutoWidth.css";

const SelectScoreAutoWidthFragment = graphql`
  fragment SelectScoreAutoWidthFragment on HoleScore {
    courseName
    holeNr
    nodeId
    scorerId
    stamp
    strokes
    tournamentId
  }
`;

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
        courseHoleByHoleNrAndCourseName {
          courseName
          holeIndex
          holeNr
          nodeId
          par
          holeScoresByHoleNrAndCourseName {
            nodes {
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
      }
    }
  }
`;

const maxAcceptableScore = 12;

export default function SelectScoreAutoWidth({
  playerId,
  tournamentId,
  courseName,
  holeNr,
  hole,
}) {
  const data = useFragment(SelectScoreAutoWidthFragment, hole);

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
          tournamentId: tournamentId /* TODO - optional */,
          strokes: event.target.value,
        },
      },
      onCompleted: (res) => {
        console.log(res);
      },
      updater: (store, _data) => {
        // const payload = store.getRootField("createEntry");
        // const newEdge = payload.getLinkedRecord("entryEdge");
        // sharedUpdater(store, diaryId, newEdge);
        console.log(store);
        console.log(_data);
        store.invalidateStore();
      },
    });
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="score-simple-select-autowidth"
          value={data?.strokes || ""}
          onChange={handleChange}
          label="Score"
          variant="standard"
          IconComponent={() => ""}
          disabled={isMutationInFlight}
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
