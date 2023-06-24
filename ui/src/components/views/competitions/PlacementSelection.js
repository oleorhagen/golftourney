import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

const competitionsScoreMutation = graphql`
  mutation PlacementSelectionMutation(
    $points: BigInt!
    $competitionId: UUID!
    $playerId: UUID!
  ) {
    createCompetitionScore(
      input: {
        competitionScore: {
          points: $points
          competitionId: $competitionId
          playerId: $playerId
        }
      }
    ) {
      clientMutationId
    }
  }
`;

const competitionsScoreUpdateMutation = graphql`
  mutation PlacementSelectionUpdateMutation($points: BigInt!, $nodeId: UUID!) {
    updateCompetitionScoreById(
      input: { competitionScorePatch: { points: $points }, id: $nodeId }
    ) {
      clientMutationId
      competitionScore {
        points
        nodeId
        id
      }
    }
  }
`;

const acceptablePlacements = [1, 2, 3, 4];

export default function PlacementSelection(props) {
  console.log(`placement got props: ${props}`);
  console.log(props);
  const nodeId = props.nodeId;
  const playerId = props.playerId;
  const competitionId = props.competitionId;

  if (!playerId || !competitionId) {
    console.log(`misssing data in placement`);
  }

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    props.nodeId ? competitionsScoreUpdateMutation : competitionsScoreMutation
  );

  const handleChange = (event) => {
    console.log("handle placment change");
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
    });
    console.log("created points!");
    console.log(createdData);
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="placement-simple-select-autowidth"
          value={props.placement || ""}
          onChange={handleChange}
          label="Placement"
          variant="standard"
          IconComponent={() => ""}
        >
          {acceptablePlacements.map((acceptablePlacement) => (
            <MenuItem key={acceptablePlacement} value={acceptablePlacement}>
              {acceptablePlacement}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
