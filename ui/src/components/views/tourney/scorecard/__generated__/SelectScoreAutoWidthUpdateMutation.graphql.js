/**
 * @generated SignedSource<<8924bc2d89bbbb60af39216f0a87f8c7>>
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeNr",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "scorerId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stamp",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "strokes",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tournamentId",
  "storageKey": null
},
v8 = [
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
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "CourseHole",
            "kind": "LinkedField",
            "name": "courseHoleByHoleNrAndCourseName",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "holeIndex",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "par",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HoleScoresConnection",
                "kind": "LinkedField",
                "name": "holeScoresByHoleNrAndCourseName",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "HoleScore",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "selections": (v8/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthUpdateMutation",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "80043d21a50ca685cab41b4b7f1626b2",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthUpdateMutation(\n  $holeScore: UpdateHoleScoreInput!\n) {\n  updateHoleScore(input: $holeScore) {\n    holeScore {\n      courseName\n      holeNr\n      nodeId\n      scorerId\n      stamp\n      strokes\n      tournamentId\n      courseHoleByHoleNrAndCourseName {\n        courseName\n        holeIndex\n        holeNr\n        nodeId\n        par\n        holeScoresByHoleNrAndCourseName {\n          nodes {\n            courseName\n            holeNr\n            nodeId\n            scorerId\n            stamp\n            strokes\n            tournamentId\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "2eef0b78659b11e3f9faf99be9895804";

module.exports = node;
