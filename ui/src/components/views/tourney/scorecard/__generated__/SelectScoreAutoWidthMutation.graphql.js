/**
 * @generated SignedSource<<92f9d3f2fa788599701cf23bf71a2d52>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": {
      "courseId": "1",
      "holeId": "1",
      "nr": "3",
      "playerId": "1"
    },
    "kind": "LocalArgument",
    "name": "score"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "score",
        "variableName": "score"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nr",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateScorePayload",
        "kind": "LinkedField",
        "name": "createScore",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "score",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateScorePayload",
        "kind": "LinkedField",
        "name": "createScore",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "score",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
    "cacheID": "d5319bc912c8f4186b9216a9122e4562",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $score: ScoreInput = {nr: \"3\", courseId: \"1\", holeId: \"1\", playerId: \"1\"}\n) {\n  createScore(input: {score: $score}) {\n    clientMutationId\n    score {\n      id\n      nr\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "3ed7f34930d34f4546adda8b6c1da2c3";

module.exports = node;
