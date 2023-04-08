/**
 * @generated SignedSource<<66b40bc8feba0a61ce9eb4b6093dcb14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "courseId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "holeId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "strokes"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "courseId",
                "variableName": "courseId"
              },
              {
                "kind": "Variable",
                "name": "holeId",
                "variableName": "holeId"
              },
              {
                "kind": "Variable",
                "name": "playerId",
                "variableName": "playerId"
              },
              {
                "kind": "Variable",
                "name": "strokes",
                "variableName": "strokes"
              }
            ],
            "kind": "ObjectValue",
            "name": "score"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateScorePayload",
    "kind": "LinkedField",
    "name": "createScore",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Score",
        "kind": "LinkedField",
        "name": "score",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "strokes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "playerId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "courseId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "holeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "f0ef8af3a189aaf21ea41875829e6003",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $strokes: BigInt!\n  $playerId: BigInt\n  $courseId: BigInt\n  $holeId: BigInt\n) {\n  createScore(input: {score: {strokes: $strokes, playerId: $playerId, courseId: $courseId, holeId: $holeId}}) {\n    clientMutationId\n    score {\n      id\n      strokes\n      playerId\n      courseId\n      holeId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "47fbb814a33f3855d0f440089378df4e";

module.exports = node;
