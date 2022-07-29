import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import { Paper, Typography, TextField } from "@mui/material";

import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardBody from "./ScoreCardBody";
import ScoreCardFooter from "./ScoreCardFooter";

import { PointsFromScore } from "./PointScore";

let testData = [
  // Front
  { hole: 1, par: 5, hcp: 7, extra: 0 },
  { hole: 2, par: 3, hcp: 11, extra: 0 },
  { hole: 3, par: 5, hcp: 5, extra: 0 },
  { hole: 4, par: 4, hcp: 9, extra: 0 },
  { hole: 5, par: 3, hcp: 15, extra: 0 },
  { hole: 6, par: 5, hcp: 13, extra: 0 },
  { hole: 7, par: 3, hcp: 17, extra: 0 },
  { hole: 8, par: 4, hcp: 3, extra: 0 },
  { hole: 9, par: 4, hcp: 1, extra: 0 },
  // Back
  { hole: 10, par: 4, hcp: 16, extra: 0 },
  { hole: 11, par: 3, hcp: 18, extra: 0 },
  { hole: 12, par: 4, hcp: 6, extra: 0 },
  { hole: 13, par: 4, hcp: 14, extra: 0 },
  { hole: 14, par: 3, hcp: 12, extra: 0 },
  { hole: 15, par: 5, hcp: 10, extra: 0 },
  { hole: 16, par: 4, hcp: 8, extra: 0 },
  { hole: 17, par: 5, hcp: 2, extra: 0 },
  { hole: 18, par: 4, hcp: 4, extra: 0 },
];

// Distribute the number of extra strokes on the available holes. Through a
// simple distribution of adding strokes to the hardest holes, then continuing..
// Idea: Sort the array on Hcp, then loop over it until out of extra strokes
function distributeStrokes(n) {
  let comparator = (a, b) => {
    return a.hcp > b.hcp;
  };
  let extraStrokes = testData.sort((a, b) => a.hcp > b.hcp);
  let i = 0;
  while (n > 0) {
    extraStrokes[i % extraStrokes.length].extra++;
    i++;
    n--;
  }
  // Sort by holes again
  extraStrokes.sort((a, b) => a.hole > b.hole);
  testData = extraStrokes;
}

distributeStrokes(25);

export const ScoreCard = (props) => {
  const [scoresFront, setScoresFront] = useState(Array(9).fill(null));
  const [scoresBack, setScoresBack] = useState(Array(9).fill(null));

  const onChangeFront = (index) => {
    return (val) => {
      let newScores = [...scoresFront];
      newScores[index] = val;
      setScoresFront(newScores);
    };
  };

  const onChangeBack = (index) => {
    return (val) => {
      let newScores = [...scoresBack];
      newScores[index] = val;
      setScoresBack(newScores);
    };
  };

  return (
    <>
      <ScoreCardHeader
        score={
          scoresFront.reduce((a, b) => a + b, 0) +
          scoresBack.reduce((a, b) => a + b)
        }
        points={
          scoresFront
            .map((score, index) => {
              if (!score) {
                return 0;
              }
              return PointsFromScore(
                testData[index].par,
                testData[index].extra,
                score
              );
            })
            .reduce((a, b) => a + b) +
          scoresBack
            .map((score, index) => {
              if (!score) {
                return 0;
              }
              return PointsFromScore(
                testData[index].par,
                testData[index].extra,
                score
              );
            })
            .reduce((a, b) => a + b)
        }
      />
      <ScoreCardBody
        scorecard={props.scorecard}
        onChangeFront={onChangeFront}
        onChangeBack={onChangeBack}
        scoresFront={scoresFront}
        scoresBack={scoresBack}
        data={testData}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
