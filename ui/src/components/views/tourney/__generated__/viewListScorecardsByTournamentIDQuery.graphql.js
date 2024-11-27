/**
 * @generated SignedSource<<7942307424f4e89b208baf9382fbccd9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "scorerId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tournamentId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "scorerId",
            "variableName": "scorerId"
          },
          {
            "kind": "Variable",
            "name": "tournamentId",
            "variableName": "tournamentId"
          }
        ],
        "kind": "ObjectValue",
        "name": "condition"
      }
    ],
    "concreteType": "ScorecardsConnection",
    "kind": "LinkedField",
    "name": "scorecards",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Scorecard",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
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
            "name": "courseName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "handicap",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewListScorecardsByTournamentIDQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "viewListScorecardsByTournamentIDQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "feeb9a181c2cc65bca97effb7955e642",
    "id": null,
    "metadata": {},
    "name": "viewListScorecardsByTournamentIDQuery",
    "operationKind": "query",
    "text": "query viewListScorecardsByTournamentIDQuery(\n  $tournamentId: UUID!\n  $scorerId: UUID!\n) {\n  scorecards(condition: {tournamentId: $tournamentId, scorerId: $scorerId}) {\n    nodes {\n      id\n      courseName\n      handicap\n      nodeId\n      scorerId\n      tournamentId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "4f669806e977af8ec702e0ba53c23f82";

module.exports = node;
