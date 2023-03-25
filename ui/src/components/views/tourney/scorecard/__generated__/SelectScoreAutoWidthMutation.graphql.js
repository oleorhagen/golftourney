/**
 * @generated SignedSource<<f475224c41153cbd71c9a78a71cbdd1a>>
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "scoreId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nr",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "playerId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseId",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeId",
  "storageKey": null
};
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
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "CreateScorePayload",
        "kind": "LinkedField",
        "name": "createScore",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "score",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
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
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "CreateScorePayload",
        "kind": "LinkedField",
        "name": "createScore",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "score",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "b78153241c5e0f8ee02c6e96b30600d4",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $nr: BigInt!\n  $playerId: BigInt\n  $courseId: BigInt\n  $holeId: BigInt\n) {\n  createScore(input: {score: {nr: $nr, playerId: $playerId, courseId: $courseId, holeId: $holeId}}) {\n    clientMutationId\n    score {\n      scoreId\n      nr\n      playerId\n      courseId\n      holeId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "37b419721629962e72951a01fbda9a6a";

module.exports = node;
