import React, { useState } from "react";

import { Button, TextField, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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

const PlayerStatsUpdateHandicapMutation = graphql`
  mutation PlayerStatsUpdateCourseHandicapMutation(
    $id: UUID!
    $handicap: BigInt!
  ) {
    updateCourseHandicapById(
      input: { courseHandicapPatch: { handicap: $handicap }, id: $id }
    ) {
      clientMutationId
      courseHandicap {
        handicap
        id
        nodeId
        courseId
        createdAt
        playerId
      }
    }
  }
`;

export default function PlayerStats(props) {
  const [hcp, setHcp] = useState("");
  const [error, setError] = useState(false);

  console.log(`player stats id ${props.id}`);
  console.log(props);

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    props.id
      ? PlayerStatsUpdateHandicapMutation
      : PlayerStatsSetHandicapMutation
  );

  if (props.id) {
    console.log(`Got nodeID`);
    console.log(commitMutation);
  }

  if (props.id) {
    console.log(`yay - we got a id to work with now!`);
  }

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
          }}
        />
        <Button
          endIcon={<SendIcon />}
          variant="outlined"
          onClick={() => {
            console.log(`button clicked!`);
            commitMutation({
              variables: {
                handicap: hcp,
                playerId: props.playerId,
                courseId: props.course_id,
                id: props.id,
              },
              onError: (e) => {
                console.log(
                  `oh nooo, error creating mutation player handicap ${e}`
                );
              },
              onSuccess: () => {
                console.log(`successfully updated the handicap on the server`);
                // /* props.onChange(event.target.value); */
              },
            });
          }}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
}
