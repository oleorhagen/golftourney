import React from "react";

import ScoreCardTable from "./ScoreCardTable";
import ScoreCardFooter from "./ScoreCardFooter";

export const ScoreCard = (props) => {
  return (
    <>
      <ScoreCardTable
        scorerId={props.player.id}
        courseName={props.course.name}
        scorecardId={props.id}
        holes={props.course.holes}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
