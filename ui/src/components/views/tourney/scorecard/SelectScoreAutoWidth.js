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
      score {
        id
        nodeId
        strokes
        points
      }
    }
  }
`;

// Create the score if it does not exist
// const SelectCreateEmptyScore = graphql`
//   mutation CreateScoreMutation(
//     $playerId: UUID!
//     $courseId: UUID!
//     $holeId: UUID!
//   ) {
//     createScore(
//       input: {
//         score: {
//           strokes: "0"
//           points: "0"
//           playerId: $playerId
//           courseId: $courseId
//           holeId: $holeId
//         }
//       }
//     ) {
//       clientMutationId
//       score {
//         id
//         nodeId
//       }
//     }
//   }
// `;

const acceptableScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO - Make this create the correct score on the server
function PointsFromScore(par, extraHcpStrokes, score) {
  let res = Number(par) + Number(extraHcpStrokes) - Number(score) + 2;
  if (res <= 0) {
    return 0;
  }
  return res;
}

export default function SelectScoreAutoWidth({
  onChange,
  holeId,
  playerId,
  courseId,
  nodeId,
  strokes,
  par,
  hcpe,
}) {
  if (strokes == 0) {
    strokes = "";
  }
  const [score, setScore] = React.useState(strokes);

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    SelectScoreAutoWidthMutation
  );

  if (!nodeId) {
    console.log("No node ID, the score needs to be created!");
    return <div></div>;
  }

  const handleChange = (event) => {
    commitMutation({
      variables: {
        strokes: event.target.value,
        points: PointsFromScore(par, hcpe, event.target.value),
        playerId: playerId,
        courseId: courseId,
        nodeId: nodeId,
      },
      onError: (e) => {
        // Revert the score
        console.error(e);
        setScore(score);
      },
      onCompleted: (data) => {
        setScore(Number(data.updateScore.score.strokes));
        onChange(Number(data.updateScore.score.strokes));
      },
    });
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
