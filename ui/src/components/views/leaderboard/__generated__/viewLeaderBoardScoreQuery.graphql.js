/**
 * @generated SignedSource<<6e1a13d45d35dfee26040d50398c4409>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "HOLE_ID_DESC"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "points",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "playerId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "CompetitionScoresConnection",
  "kind": "LinkedField",
  "name": "allCompetitionScores",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CompetitionScore",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v4/*: any*/),
        (v5/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "placement",
          "storageKey": null
        },
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "PlayersConnection",
  "kind": "LinkedField",
  "name": "allPlayers",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Player",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        (v5/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewLeaderBoardScoreQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ScoresConnection",
        "kind": "LinkedField",
        "name": "allScores",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allScores(orderBy:\"HOLE_ID_DESC\")"
      },
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewLeaderBoardScoreQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ScoresConnection",
        "kind": "LinkedField",
        "name": "allScores",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Score",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allScores(orderBy:\"HOLE_ID_DESC\")"
      },
      (v6/*: any*/),
      (v7/*: any*/)
    ]
  },
  "params": {
    "cacheID": "46edc34e8be358c8e583bbe4866dc137",
    "id": null,
    "metadata": {},
    "name": "viewLeaderBoardScoreQuery",
    "operationKind": "query",
    "text": "query viewLeaderBoardScoreQuery {\n  allScores(orderBy: HOLE_ID_DESC) {\n    nodes {\n      points\n      playerId\n      holeId\n      nodeId\n    }\n  }\n  allCompetitionScores {\n    nodes {\n      id\n      nodeId\n      placement\n      playerId\n    }\n  }\n  allPlayers {\n    nodes {\n      id\n      name\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "5e913ece0e188a7560e2672c36c703f0";

module.exports = node;
