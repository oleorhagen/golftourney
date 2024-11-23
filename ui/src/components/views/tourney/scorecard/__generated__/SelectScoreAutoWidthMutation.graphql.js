/**
 * @generated SignedSource<<72167d8338352757bf3187570c0866e2>>
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
        "fields": [
          {
            "kind": "Variable",
            "name": "holeScore",
            "variableName": "holeScore"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateHoleScorePayload",
    "kind": "LinkedField",
    "name": "createHoleScore",
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
            "name": "tournamentId",
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
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "83ecfd7618e0f46adfba609410671876",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $holeScore: HoleScoreInput!\n) {\n  createHoleScore(input: {holeScore: $holeScore}) {\n    holeScore {\n      courseName\n      holeNr\n      nodeId\n      scorerId\n      stamp\n      strokes\n      tournamentId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "c7b2d5151ab4b0341e807ac2957eaf21";

module.exports = node;
