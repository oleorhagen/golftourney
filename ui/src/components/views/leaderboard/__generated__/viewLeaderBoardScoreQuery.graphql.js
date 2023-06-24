/**
 * @generated SignedSource<<ba234fca509f6d6d26b66eee30d883b1>>
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
        (v1/*: any*/),
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
    "cacheID": "d8654dd7473a3c6ffde1966439fbb955",
    "id": null,
    "metadata": {},
    "name": "viewLeaderBoardScoreQuery",
    "operationKind": "query",
    "text": "query viewLeaderBoardScoreQuery {\n  allScores(orderBy: HOLE_ID_DESC) {\n    nodes {\n      points\n      playerId\n      holeId\n      nodeId\n    }\n  }\n  allCompetitionScores {\n    nodes {\n      id\n      nodeId\n      points\n      playerId\n    }\n  }\n  allPlayers {\n    nodes {\n      id\n      name\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "0a6a6017e144b43390db1eb0abf4c141";

module.exports = node;
