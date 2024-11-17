/**
 * @generated SignedSource<<c80840637df6b6851afa387d55b0b499>>
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
  "name": "tournamentCoursesByTournamentId",
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
        "name": "tournamentById",
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
        "name": "tournamentById",
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
    "cacheID": "610b094e05e9d2e7c3d662f5f775d5d6",
    "id": null,
    "metadata": {},
    "name": "viewCoursesByTournamentIdQuery",
    "operationKind": "query",
    "text": "query viewCoursesByTournamentIdQuery(\n  $id: UUID!\n) {\n  tournamentById(id: $id) {\n    tournamentCoursesByTournamentId {\n      nodes {\n        courseName\n        nodeId\n        tournamentId\n      }\n    }\n    nodeId\n  }\n}\n"
  }
};
})();

node.hash = "10ac3b7df84b3304591d3a2c79c2e874";

module.exports = node;
