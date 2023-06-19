import React, { useState } from "react";

import { TextField, Typography, Paper } from "@mui/material";

import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

const PlayerStatsSetHandicapMutation = graphql`
  mutation PlayerStatsSetHandicapMutation(
    $handicap: BigInt!
    $playerId: UUID!
    $courseId: UUID!
  ) {
    createCourseHandicap(
      input: {
        courseHandicap: {
          handicap: $handicap
          playerId: $playerId
          courseId: $courseId
        }
      }
    ) {
      clientMutationId
    }
  }
`;

export default function PlayerStats(props) {
  const [hcp, setHcp] = useState("");
  const [error, setError] = useState(false);

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    PlayerStatsSetHandicapMutation
  );

  return (
    <div className="player-state">
      <Paper sx={{ marginBottom: 10 }}>
        <Typography>Player ID: {props.playerId} </Typography>
        <Typography>Player HCP: {hcp} </Typography>
        <TextField
          id="outlined-controlled-hcp-select"
          error={error}
          label="Extra Strokes on the Course"
          value={hcp}
          onChange={(event) => {
            if (isNaN(Number(event.target.value))) {
              setError(true);
              return;
            }
            const inputHcp = Number(event.target.value);
            if (!(inputHcp >= 0 && inputHcp <= 54)) {
              setError(true);
              return;
            }
            setError(false);
            setHcp(event.target.value);
            commitMutation({
              variables: {
                handicap: event.target.value,
                playerId: props.playerId,
                courseId: props.course_id,
              },
            });
            props.onChange(event.target.value);
          }}
        />
      </Paper>
    </div>
  );
}
