import React, { useState } from "react";

import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardBody from "./ScoreCardBody";
import ScoreCardFooter from "./ScoreCardFooter";

export const ScoreCard = (props) => {
  console.log(`Received the course data: ${props.courseData}`);

  const [scoresFront, setScoresFront] = useState(Array(9).fill(null));
  const [scoresBack, setScoresBack] = useState(Array(9).fill(null));

  const onChangeFront = (index) => {
    return (val) => {
      let newScores = [...scoresFront];
      newScores[index] = val;
      setScoresFront(newScores);
      console.log(`Changing score for the front.. ${index} : ${val}`);
    };
  };

  const onChangeBack = (index) => {
    return (val) => {
      let newScores = [...scoresBack];
      newScores[index] = val;
      setScoresBack(newScores);
    };
  };

  const {
    holesByCourseId: { nodes },
  } = props.courseData;

  const holes = nodes; // alias it to holes

  console.log("scorecard course data:");
  console.log(holes);

  if (holes.length == 0) {
    return "Noo data";
  }

  return (
    <>
      {/* <ScoreCardHeader */}
      {/*   score={ */}
      {/*     scoresFront.reduce((a, b) => a + b, 0) + */}
      {/*     scoresBack.reduce((a, b) => a + b, 0) */}
      {/*   } */}
      {/*   points={ */}
      {/*     scoresFront */}
      {/*       .map((score, index) => { */}
      {/*         if (!score) { */}
      {/*           return 0; */}
      {/*         } */}
      {/*         return score; */}
      {/*       }) */}
      {/*       .reduce((a, b) => a + b, 0) + */}
      {/*     scoresBack */}
      {/*       .map((score, index) => { */}
      {/*         if (!score) { */}
      {/*           return 0; */}
      {/*         } */}
      {/*         return score; */}
      {/*       }) */}
      {/*       .reduce((a, b) => a + b, 0) */}
      {/*   } */}
      {/* /> */}
      <ScoreCardBody
        scorecard={props.scorecard}
        onChangeFront={onChangeFront}
        onChangeBack={onChangeBack}
        scoresFront={scoresFront}
        scoresBack={scoresBack}
        data={holes}
        {...props}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
