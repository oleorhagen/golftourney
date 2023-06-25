import React, { useState } from "react";

import {
  Button,
  Chip,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import graphql from "babel-plugin-relay/macro";
import { useFragment, useMutation } from "react-relay";

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

const HandicapFragment = graphql`
  fragment PlayerStatsHandicapFragment on CourseHandicap {
    courseId
    createdAt
    handicap
    id
    nodeId
    playerId
  }
`;

// function PlayerHandicapExisting(props) {
//   return (
//     <Container maxWidth="sm">
//       <div className="player-state">
//         <Paper elevation={2} sx={{ marginBottom: 10 }}>
//           <TextField
//             id="outlined-controlled-hcp-select"
//             error={error}
//             helperText={helpText}
//             label="Extra Strokes on the Course"
//             value={hcp || data?.handicap}
//             onChange={(event) => {
//               if (isNaN(Number(event.target.value))) {
//                 setError(true);
//                 return;
//               }
//               const inputHcp = Number(event.target.value);
//               if (!(inputHcp >= 0 && inputHcp <= 54)) {
//                 setError(true);
//                 return;
//               }
//               setError(false);
//               setHcp(event.target.value);
//             }}
//           />
//           <Button
//             variant="outlined"
//             onClick={() => {
//               commitMutation({
//                 variables: {
//                   handicap: hcp,
//                   playerId: props.playerId,
//                   courseId: props.course_id,
//                   id: data?.id,
//                 },
//                 onError: (e) => {
//                   console.log(
//                     `oh nooo, error creating mutation player handicap ${e}`
//                   );
//                   setHcp("");
//                   setError(true);
//                   setHelpText("Please try again");
//                 },
//                 onCompleted: (data) => {
//                   console.log(
//                     `successfully updated (completed) the handicap on the server ${data}`
//                   );
//                   setHcp(hcp);
//                   props.onChange(hcp);
//                   setHelpText("");
//                 },
//               });
//             }}
//           >
//             Submit
//           </Button>
//         </Paper>
//       </div>
//     </Container>
//   );
// }

export default function PlayerStats(props) {
  const [hcp, setHcp] = useState("");
  const [error, setError] = useState(false);
  const [helpText, setHelpText] = useState("");

  const data = useFragment(HandicapFragment, props.handicap_fragment);

  const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
    props.handicap_fragment
      ? PlayerStatsUpdateHandicapMutation
      : PlayerStatsSetHandicapMutation
  );

  return (
    <Container maxWidth="sm">
      <div className="player-state">
        <Paper elevation={2} sx={{ marginBottom: 10 }}>
          <TextField
            id="outlined-controlled-hcp-select"
            error={error}
            helperText={helpText}
            label="Extra Strokes on the Course"
            value={data?.handicap}
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
            variant="outlined"
            onClick={() => {
              commitMutation({
                variables: {
                  handicap: hcp,
                  playerId: props.playerId,
                  courseId: props.course_id,
                  id: data?.id,
                },
                onError: (e) => {
                  console.log(
                    `oh nooo, error creating mutation player handicap ${e}`
                  );
                  setHcp("");
                  setError(true);
                  setHelpText("Please try again");
                },
                onCompleted: (data) => {
                  console.log(
                    `successfully updated (completed) the handicap on the server ${data}`
                  );
                  setHcp(hcp);
                  props.onChange(hcp);
                  setHelpText("");
                },
              });
            }}
          >
            Submit
          </Button>
        </Paper>
      </div>
    </Container>
  );
}
