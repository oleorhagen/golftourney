// Graph the score of all players, for all to see

import React, { useState } from "react";

import { Typography } from "@mui/material";

import graphql from "babel-plugin-relay/macro";

const getScoresQuery = graphql`
query scoreGraphQuery {
  allScores(orderBy: NATURAL) {
    nodes {
      points
      playerId
      holeId
    }
  }
}
`;


function TourneyGraph(props) {
    return (
        <>
            <Typography variant="h3">Current Scores</Typography>
        </>
    );
}

export default TourneyGraph;
