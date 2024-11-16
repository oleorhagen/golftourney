import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

const competitionsScoreMutation = graphql``;

const competitionsScoreUpdateMutation = graphql``;

const acceptablePoints = [1, 2];

export default function PlacementSelection(props) {
  const [points, setPoints] = useState(props.points || "");

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    props.nodeId ? competitionsScoreUpdateMutation : competitionsScoreMutation,
  );

  const handleChange = (event) => {
    commitMutation({
      variables: {
        points: event.target.value,
        playerId: props.playerId,
        competitionId: props.competitionId,
        nodeId: props.nodeId,
      },
      onError: (e) => {
        console.log(`oh nooo, error creating mutation ${e}`);
      },
      onCompleted: (data) => {
        setPoints(
          data?.createCompetitionScore.competitionScore.points ||
            data?.updateCompetitionScoreById.competitionScore.points,
        );
      },
    });
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="placement-simple-select-autowidth"
          value={points}
          onChange={handleChange}
          label="Placement"
          variant="standard"
          IconComponent={() => ""}
        >
          {acceptablePoints.map((acceptablePoints) => (
            <MenuItem key={acceptablePoints} value={acceptablePoints}>
              {acceptablePoints}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
