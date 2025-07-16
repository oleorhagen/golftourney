/**
 * @generated SignedSource<<08fe8f6b526006d879b4a06039d64090>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "orderBy",
        "value": "YEAR_DESC"
      }
    ],
    "concreteType": "Tournament",
    "kind": "LinkedField",
    "name": "tournaments",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "year",
        "storageKey": null
      }
    ],
    "storageKey": "tournaments(orderBy:\"YEAR_DESC\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewListTournamentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewListTournamentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5ff31496db59be78af2131d6b9e4eeed",
    "id": null,
    "metadata": {},
    "name": "viewListTournamentsQuery",
    "operationKind": "query",
    "text": "query viewListTournamentsQuery {\n  tournaments(orderBy: YEAR_DESC) {\n    id\n    name\n    year\n  }\n}\n"
  }
};
})();

node.hash = "9f458ab57ab678efa3df786d35904909";

module.exports = node;
