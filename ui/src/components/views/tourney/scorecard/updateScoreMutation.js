import { useMutation } from "react-relay";
import { useCallback } from "react";
// import {
//   useRenameTodoMutationResponse,
//   RenameTodoInput,
// } from "./__generated__/useRenameTodoMutation.graphql";

const graphql = require("babel-plugin-relay/macro");

const mutation = graphql`
  mutation updateHoleScoreMutation(
    $score: ScoreInput = { nr: "3", courseId: "1", holeId: "1", playerId: "1" }
  ) {
    createScore(input: { score: $score }) {
      clientMutationId
      score {
        id
        nr
      }
    }
  }
`;

function getOptimisticResponse(text, todoId, courseId, holeId, playerId) {
  return {
    createScore: {
      score: {
        id,
        nr,
        courseId,
        holeId,
        playerId,
      },
    },
  };
}

export default function useRenameTodoMutation() {
  const [commit] = useMutation(mutation);
  return [
    useCallback(
      (text, todoId) => {
        const input = {
          text,
          id,
        };

        return commit({
          variables: { input },
          optimisticResponse: getOptimisticResponse(text, todoId),
        });
      },
      [commit]
    ),
  ];
}
