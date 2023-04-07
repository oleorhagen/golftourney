/**
 * @generated SignedSource<<cabb49f38698bf50fc7713a66fa57cc4>>
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
  "name": "nr"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
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
                "name": "nr",
                "variableName": "nr"
              },
              {
                "kind": "Variable",
                "name": "playerId",
                "variableName": "playerId"
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
            "name": "nr",
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "f8f4b47f6bda54b1630540ba28f5aa42",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $nr: BigInt!\n  $playerId: BigInt\n  $courseId: BigInt\n  $holeId: BigInt\n) {\n  createScore(input: {score: {nr: $nr, playerId: $playerId, courseId: $courseId, holeId: $holeId}}) {\n    clientMutationId\n    score {\n      id\n      nr\n      playerId\n      courseId\n      holeId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "bd3a18cb5c987ff52f74bae01b2009b9";

module.exports = node;
