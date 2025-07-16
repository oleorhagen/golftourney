/**
 * @generated SignedSource<<8ce8c113da1799115668da4a3b4eb6ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tournamentId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "handicap",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "tournamentId"
          }
        ],
        "kind": "ObjectValue",
        "name": "condition"
      }
    ],
    "concreteType": "Tournament",
    "kind": "LinkedField",
    "name": "tournaments",
    "plural": true,
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "year",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "playerId",
            "variableName": "playerId"
          },
          {
            "kind": "Variable",
            "name": "tournamentId",
            "variableName": "tournamentId"
          }
        ],
        "kind": "ObjectValue",
        "name": "condition"
      },
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "CREATED_AT_DESC"
      }
    ],
    "concreteType": "Scorecard",
    "kind": "LinkedField",
    "name": "scorecards",
    "plural": true,
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ScorecardCourse",
        "kind": "LinkedField",
        "name": "course",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nr_holes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slope",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "course_rating",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Player",
        "kind": "LinkedField",
        "name": "player",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "detailTournamentDetailQuery",
    "selections": (v5/*: any*/),
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
    "name": "detailTournamentDetailQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "0df928cfd9c3ec1795676c409d7eb4a2",
    "id": null,
    "metadata": {},
    "name": "detailTournamentDetailQuery",
    "operationKind": "query",
    "text": "query detailTournamentDetailQuery(\n  $tournamentId: ID!\n  $playerId: ID!\n) {\n  tournaments(condition: {id: $tournamentId}) {\n    id\n    name\n    year\n  }\n  scorecards(condition: {tournamentId: $tournamentId, playerId: $playerId}, orderBy: CREATED_AT_DESC) {\n    id\n    handicap\n    created_at\n    course {\n      name\n      nr_holes\n      slope\n      course_rating\n    }\n    player {\n      id\n      name\n      handicap\n    }\n  }\n}\n"
  }
};
})();

node.hash = "1093f7bd32c2636035a54dd2472ea74a";

module.exports = node;
