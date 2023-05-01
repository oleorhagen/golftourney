/**
 * @generated SignedSource<<8a271644d50cf59ff50814d9f460771c>>
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
    "value": "NATURAL"
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
        "storageKey": "allScores(orderBy:\"NATURAL\")"
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
        "storageKey": "allScores(orderBy:\"NATURAL\")"
      }
    ]
  },
  "params": {
    "cacheID": "89d64a8b6237713f1180c3b2193bb3e6",
    "id": null,
    "metadata": {},
    "name": "scoreGraphQuery",
    "operationKind": "query",
    "text": "query scoreGraphQuery {\n  allScores(orderBy: NATURAL) {\n    nodes {\n      points\n      playerId\n      holeId\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "ce1725cb7841001c0b2805cbcee93d2e";

module.exports = node;
