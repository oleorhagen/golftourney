import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

const competitionsScoreMutation = graphql`
  mutation PlacementSelectionMutation(
    $placement: BigInt!
    $competitionId: UUID!
    $playerId: UUID!
  ) {
    createCompetitionScore(
      input: {
        competitionScore: {
          placement: $placement
          competitionId: $competitionId
          playerId: $playerId
        }
      }
    ) {
      clientMutationId
    }
  }
`;

const acceptablePlacements = [1, 2, 3, 4];

export default function PlacementSelection(props) {
  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    competitionsScoreMutation
  );

  console.log(`placement got props: ${props}`);
  console.log(props);
  const nodeId = props.nodeId;
  const playerId = props.playerId;
  const competitionId = props.competitionId;

  if (!nodeId || !playerId || !competitionId) {
    console.log(`misssing data in placement`);
  }

  const [placement, setPlacement] = React.useState("");

  const handleChange = (event) => {
    console.log("handle placment change");
    commitMutation({
      variables: {
        placement: event.target.value,
        playerId: props.playerId,
        competitionId: props.competitionId,
        nodeId: props.nodeId,
      },
      onError: (e) => {
        console.log(`oh nooo, error creating mutation ${e}`);
      },
    });
    console.log("created placement!");
    console.log(createdData);
    setPlacement(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="placement-simple-select-autowidth"
          value={placement}
          onChange={handleChange}
          label="Placement"
          variant="standard"
          IconComponent={() => ""}
        >
          {acceptablePlacements.map((placement) => (
            <MenuItem key={placement} value={placement}>
              {placement}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
