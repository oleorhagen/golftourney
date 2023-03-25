import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./SelectScoreAutoWidth.css";

import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

// TODO - Have Update the score in the DB
const SelectScoreAutoWidthMutation = graphql`
  mutation SelectScoreAutoWidthMutation(
    $nr: BigInt!
    $id: BigInt
    $playerId: BigInt
    $courseId: BigInt
    $holeId: BigInt
  ) {
    createScore(
      input: {
        score: {
          nr: $nr
          id: $id
          playerId: $playerId
          courseId: $courseId
          holeId: $holeId
        }
      }
    ) {
      clientMutationId
      score {
        id
        nr
        playerId
        courseId
        holeId
      }
    }
  }
`;

const acceptableScores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SelectScoreAutoWidth({ onChange }) {
  const [score, setScore] = React.useState("");

  const [commitMutation, isMutationInFlight] = useMutation(
    SelectScoreAutoWidthMutation
  );

  if (isMutationInFlight) {
    console.log(`mutation is in flight...`);
  }

  const handleChange = (event) => {
    // TODO - Do we need to separately manage state here now (?)
    console.log(`Updating the score...`);
    commitMutation({
      variables: {
        nr: 3,
        id: 1, // TODO - WHat is the right ID?
        playerId: 1,
        courseId: 1,
        holeId: 2,
      },
    });
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
