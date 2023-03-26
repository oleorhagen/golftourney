import React, { useState } from "react";

// import { commitMutation, graphql } from "babel-plugin-relay/macro";

import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardBody from "./ScoreCardBody";
import ScoreCardFooter from "./ScoreCardFooter";

import { PointsFromScore } from "./PointScore";

// Distribute the number of extra strokes on the available holes. Through a
// simple distribution of adding strokes to the hardest holes, then continuing..
// Idea: Sort the array on Hcp, then loop over it until out of extra strokes
function distributeStrokes(holes, NumberOfextraStrokes) {
  let extraStrokes = holes.sort((a, b) => a.hcp > b.hcp);
  let i = 0;
  while (NumberOfextraStrokes > 0) {
    extraStrokes[i % extraStrokes.length].extra++;
    i++;
    NumberOfextraStrokes--;
  }
  // Sort by holes again
  extraStrokes.sort((a, b) => a.hole > b.hole);
  holes = extraStrokes;
}

// distributeStrokes(25);

export const ScoreCard = (props) => {
  const [hcpStrokes, setHcpStrokes] = useState(30);

  console.log(`Received the course data: ${props.courseData}`);

  const onChangeHcp = (event) => {
    console.log("onChangeHcp");
    console.log(event.target.value);
    // TODO - Reset the strokes before distributing them...
    distributeStrokes(event.target.value);
    setHcpStrokes(event.target.value);
  };

  const [scoresFront, setScoresFront] = useState(Array(9).fill(null));
  const [scoresBack, setScoresBack] = useState(Array(9).fill(null));

  const onChangeFront = (index) => {
    return (val) => {
      let newScores = [...scoresFront];
      newScores[index] = val;
      setScoresFront(newScores);
      console.log(`Changing score for the front.. ${index} : ${val}`);
      // TODO - Set the score on the hole in the Server here
    };
  };

  const onChangeBack = (index) => {
    return (val) => {
      let newScores = [...scoresBack];
      newScores[index] = val;
      setScoresBack(newScores);
      // TODO - Set the score on the hole in the Server here
    };
  };

  return (
    <>
      <ScoreCardHeader
        hcp={hcpStrokes}
        onChangeHcp={onChangeHcp}
        score={
          scoresFront.reduce((a, b) => a + b, 0) +
          scoresBack.reduce((a, b) => a + b, 0)
        }
        points={
          scoresFront
            .map((score, index) => {
              if (!score) {
                return 0;
              }
              return PointsFromScore(
                props.courseData[index].par,
                1, // TODO - How to handle extra strokes now?
                score
              );
            })
            .reduce((a, b) => a + b, 0) +
          scoresBack
            .map((score, index) => {
              if (!score) {
                return 0;
              }
              return PointsFromScore(
                props.courseData[index + 9].par,
                1, // TODO - How to handle extra strokes now ?
                score
              );
            })
            .reduce((a, b) => a + b, 0)
        }
      />
      <ScoreCardBody
        scorecard={props.scorecard}
        onChangeFront={onChangeFront}
        onChangeBack={onChangeBack}
        scoresFront={scoresFront}
        scoresBack={scoresBack}
        data={props.courseData}
        // TODO - The hcp does not map directly to extra strokes given
        // hcpExtraStrokes={hcpStrokes}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
