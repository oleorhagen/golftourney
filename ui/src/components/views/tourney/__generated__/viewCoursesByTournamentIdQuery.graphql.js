/**
 * @generated SignedSource<<baecc6fd17e821a545befd6048694354>>
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "TournamentCoursesConnection",
  "kind": "LinkedField",
  "name": "tournamentCourses",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TournamentCourse",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "courseName",
          "storageKey": null
        },
        (v2/*: any*/),
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "viewCoursesByTournamentIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tournament",
        "kind": "LinkedField",
        "name": "tournament",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "viewCoursesByTournamentIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tournament",
        "kind": "LinkedField",
        "name": "tournament",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0e86eaff70ea0f581955a616216300c",
    "id": null,
    "metadata": {},
    "name": "viewCoursesByTournamentIdQuery",
    "operationKind": "query",
    "text": "query viewCoursesByTournamentIdQuery(\n  $id: UUID!\n) {\n  tournament(id: $id) {\n    tournamentCourses {\n      nodes {\n        courseName\n        nodeId\n        tournamentId\n      }\n    }\n    nodeId\n  }\n}\n"
  }
};
})();

node.hash = "e70bfba14b8b16949e15f9fa6740630e";

module.exports = node;
