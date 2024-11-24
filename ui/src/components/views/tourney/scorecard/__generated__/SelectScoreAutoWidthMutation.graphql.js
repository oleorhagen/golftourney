/**
 * @generated SignedSource<<73c05ddecff81c805fa439d6f9c9be35>>
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
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v8/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v8/*: any*/)
  },
  "params": {
    "cacheID": "13610279f8bb3f70c7436ecf33b38ceb",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $holeScore: HoleScoreInput!\n) {\n  createHoleScore(input: {holeScore: $holeScore}) {\n    holeScore {\n      courseName\n      holeNr\n      nodeId\n      scorerId\n      stamp\n      strokes\n      tournamentId\n      courseHoleByHoleNrAndCourseName {\n        courseName\n        holeIndex\n        holeNr\n        nodeId\n        par\n        holeScoresByHoleNrAndCourseName {\n          nodes {\n            courseName\n            holeNr\n            nodeId\n            scorerId\n            stamp\n            strokes\n            tournamentId\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "37d71a73a3aadeb511b1c7152afea308";

module.exports = node;
