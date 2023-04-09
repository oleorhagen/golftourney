import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

import "./SelectScoreAutoWidth.css";

const SelectScoreAutoWidthMutation = graphql`
  mutation SelectScoreAutoWidthMutation(
    $nodeId: ID!
    $strokes: BigInt!
    $points: BigInt!
  ) {
    updateScore(
      input: {
        nodeId: $nodeId
        scorePatch: { strokes: $strokes, points: $points }
      }
    ) {
      clientMutationId
    }
  }
`;

const acceptableScores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SelectScoreAutoWidth({
  onChange,
  holeNumber,
  nodeId,
  strokes,
}) {
  if (strokes == 0) {
    strokes = "";
  }
  const [score, setScore] = React.useState(strokes);

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    SelectScoreAutoWidthMutation
  );

  // const [updateMutation, { mutationData, isUpdateMutationInFlight, error }] =
  //   useMutation(SelectScoreAutoWidthUpdateMutation);

  // if (isMutationInFlight) {
  //   console.log(`mutation is in flight...`);
  // } else {
  //   console.log(`mutation is not in flight anylonger`);
  // }

  const handleChange = (event) => {
    commitMutation({
      variables: {
        strokes: event.target.value,
        points: 1, // TODO
        playerId: 1,
        courseId: 1,
        nodeId: nodeId,
      },
    });
    console.log("created score!");
    console.log(createdData);
    setScore(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="score-simple-select-autowidth"
          value={score}
          onChange={handleChange}
          label="Score"
          variant="standard"
          IconComponent={() => ""}
        >
          {acceptableScores.map((score) => (
            <MenuItem key={score} value={score}>
              {score}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
