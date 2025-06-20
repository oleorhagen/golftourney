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

export const SelectScoreAutoWidthFragment = graphql`
  fragment SelectScoreAutoWidthFragment on ScorecardHole {
    nr
    strokes
  }
`;

const SelectScoreAutoWidthUpdateMutation = graphql`
  mutation SelectScoreAutoWidthUpdateMutation($input: UpdateScorecard!) {
    updateScorecard(input: $input) {
      id
      course {
        holes {
          nr
          strokes
        }
      }
    }
  }
`;

const maxAcceptableScore = 12;

export default function SelectScoreAutoWidth({
  scorecardId,
  holeNr,
  hole,
}) {
  const data = useFragment(SelectScoreAutoWidthFragment, hole);

  const [commitMutation, isMutationInFlight] = useMutation(
    SelectScoreAutoWidthUpdateMutation,
  );

  const handleChange = (event) => {
    commitMutation({
      variables: {
        input: {
          id: scorecardId,
          holes: [
            {
              nr: holeNr,
              strokes: parseInt(event.target.value),
            },
          ],
        },
      },
      onCompleted: (res) => {
        console.log(
          `successfully updated the scorecard: ${JSON.stringify(res)}`,
        );
      },
      onError: (err) => {
        console.log(`Error updating the scorecard: ${err}`);
      },
      updater: (store, _data) => {
        console.log(store);
        console.log(_data);
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
