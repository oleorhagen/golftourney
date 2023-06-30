/**
 * @generated SignedSource<<3b95baac9f11cd7c61b831961be99847>>
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoreGraphQuery",
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ScoreGraphQuery",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nodeId",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allScores(orderBy:\"HOLE_ID_DESC\")"
      }
    ]
  },
  "params": {
    "cacheID": "220ccaff5ca4baf7d03465817e1b1e22",
    "id": null,
    "metadata": {},
    "name": "ScoreGraphQuery",
    "operationKind": "query",
    "text": "query ScoreGraphQuery {\n  allScores(orderBy: HOLE_ID_DESC) {\n    nodes {\n      points\n      playerId\n      holeId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "56594e7b59f874f0971577b5023083cf";

module.exports = node;
