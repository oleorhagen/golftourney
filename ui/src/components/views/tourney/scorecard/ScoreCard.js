import React, { useState } from "react";

import ScoreCardTable from "./ScoreCardTable";
import ScoreCardFooter from "./ScoreCardFooter";

export const ScoreCard = (props) => {
  console.log(`Received the course data: ${props.courseData}`);

  const [scoresAll, setScoresAll] = useState(
    Array(props.courseData.Length).fill(null)
  );

  const onChangeAll = (index) => {
    return (val) => {
      let newScores = [...scoresAll];
      newScores[index] = val;
      setScoresAll(newScores);
      console.log(`Changing score for the front.. ${index} : ${val}`);
    };
  };

  const {
    holesByCourseId: { nodes },
  } = props.courseData;

  const holes = nodes; // alias it to holes

  if (holes.length == 0) {
    return "Noo data";
  }

  return (
    <>
      <ScoreCardTable
        scorecard={props.scorecard}
        onChange={onChangeAll}
        data={holes}
        {...props}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
