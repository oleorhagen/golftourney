/**
 * @generated SignedSource<<7f1440e27acd0879900e180c8fc2e766>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nodeId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "points"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "strokes"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "nodeId",
            "variableName": "nodeId"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "points",
                "variableName": "points"
              },
              {
                "kind": "Variable",
                "name": "strokes",
                "variableName": "strokes"
              }
            ],
            "kind": "ObjectValue",
            "name": "scorePatch"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateScorePayload",
    "kind": "LinkedField",
    "name": "updateScore",
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
            "name": "nodeId",
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
            "name": "points",
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7278476d46e349b536fc8c654cccb6b2",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $nodeId: ID!\n  $strokes: BigInt!\n  $points: BigInt!\n) {\n  updateScore(input: {nodeId: $nodeId, scorePatch: {strokes: $strokes, points: $points}}) {\n    clientMutationId\n    score {\n      id\n      nodeId\n      strokes\n      points\n    }\n  }\n}\n"
  }
};
})();

node.hash = "a321d58d00634d6de5a01f6b66cd4024";

module.exports = node;
