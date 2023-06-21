/**
 * @generated SignedSource<<55337e1b27a6973629471be338521213>>
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
    "name": "scoreGraphQuery",
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
    "name": "scoreGraphQuery",
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
    "cacheID": "89b2b0ec03ba4615117b405344be1c8b",
    "id": null,
    "metadata": {},
    "name": "scoreGraphQuery",
    "operationKind": "query",
    "text": "query scoreGraphQuery {\n  allScores(orderBy: HOLE_ID_DESC) {\n    nodes {\n      points\n      playerId\n      holeId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "b3ba9fd58de6fb0c89b6fa133e1ab1cf";

module.exports = node;
