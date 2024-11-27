import React, { useState } from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";

import { useMutation, useFragment } from "react-relay";

import "./SelectScoreAutoWidth.css";

// TODO - See https://github.com/stanlemon/example-relay-app/blob/master/src/People.jsx
//         for a sane updater example (!)
// Also, my current setup is:
// client:local:2:allCourses(condition:{"name":"Skjeberg"}):nodes:0' for the link from root

const SelectScoreAutoWidthFragment = graphql`
  fragment SelectScoreAutoWidthFragment on HoleScore {
    courseName
    holeNr
    nodeId
    scorerId
    stamp
    strokes
    scorecardId
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
        scorecardId
      }
    }
  }
`;

const SelectScoreAutoWidthUpdateMutation = graphql`
  mutation SelectScoreAutoWidthUpdateMutation(
    $holeScore: UpdateHoleScoreInput!
  ) {
    updateHoleScore(input: $holeScore) {
      holeScore {
        courseName
        holeNr
        nodeId
        scorerId
        stamp
        strokes
        scorecardId
      }
    }
  }
`;

const maxAcceptableScore = 12;

export default function SelectScoreAutoWidth({
  scorerId,
  scorecardId,
  courseName,
  holeNr,
  hole,
}) {
  const data = useFragment(SelectScoreAutoWidthFragment, hole);

  const [commitMutation, isMutationInFlight] = useMutation(
    hole ? SelectScoreAutoWidthUpdateMutation : SelectScoreAutoWidthMutation,
  );

  const handleChange = (event) => {
    const updateVariables = {
      holeScore: {
        patch: {
          strokes: event.target.value,
        },
        scorerId: scorerId,
        holeNr: holeNr,
        courseName: courseName,
        scorecardId: scorecardId,
      },
    };

    commitMutation({
      variables: hole
        ? updateVariables
        : {
            holeScore: {
              scorerId: scorerId,
              holeNr: holeNr,
              courseName: courseName,
              scorecardId: scorecardId,
              strokes: event.target.value,
            },
          },
      onCompleted: (res) => {
        console.log(
          `successfully mutated the hole score: ${JSON.stringify(res)}`,
        );
      },
      onError: (err) => {
        console.log(`Error updating the holeScore: ${err}`);
      },
      updater: (store, _data) => {
        // const payload = store.getRootField("createEntry");
        // const newEdge = payload.getLinkedRecord("entryEdge");
        // sharedUpdater(store, diaryId, newEdge);
        console.log(store);
        console.log(_data);
        // store.invalidateStore();
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
