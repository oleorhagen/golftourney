/**
 * @generated SignedSource<<56e356d8cfd506f478b2bb6c7c155fbf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CompetitionsConnection",
    "kind": "LinkedField",
    "name": "allCompetitions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Competition",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "competitionType",
            "storageKey": null
          },
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
            "name": "nodeId",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewCompetitionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewCompetitionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0ee63d86a7155ce1847fbd19c60946b0",
    "id": null,
    "metadata": {},
    "name": "viewCompetitionsQuery",
    "operationKind": "query",
    "text": "query viewCompetitionsQuery {\n  allCompetitions {\n    nodes {\n      competitionType\n      id\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "f0ceafe69587306145b32f46c68d3a5f";

module.exports = node;
