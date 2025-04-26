/**
 * @generated SignedSource<<a56a119ffa476ba8a6b43a911c3bdd08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "holeScore"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "holeScore"
      }
    ],
    "concreteType": "UpdateHoleScorePayload",
    "kind": "LinkedField",
    "name": "updateHoleScore",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HoleScore",
        "kind": "LinkedField",
        "name": "holeScore",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "courseName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "holeNr",
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
            "name": "scorerId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "stamp",
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
            "name": "scorecardId",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7b1112ac9acbc18a3ad7f17016605b9b",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthUpdateMutation(\n  $holeScore: UpdateHoleScoreInput!\n) {\n  updateHoleScore(input: $holeScore) {\n    holeScore {\n      courseName\n      holeNr\n      nodeId\n      scorerId\n      stamp\n      strokes\n      scorecardId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "89d8b4a70db1e1cef77dab2ee43a9fc3";

module.exports = node;
