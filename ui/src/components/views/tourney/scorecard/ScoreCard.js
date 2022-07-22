import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import { Paper, Typography, TextField } from "@mui/material";

import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardBody from "./ScoreCardBody";
import ScoreCardFooter from "./ScoreCardFooter";

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
      <ScoreCardHeader />
      <ScoreCardBody
        scorecard={props.scorecard}
        onChangeFront={onChangeFront}
        onChangeBack={onChangeBack}
        scoresFront={scoresFront}
        scoresBack={scoresBack}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
