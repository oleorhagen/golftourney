/**
 * @generated SignedSource<<b09aaacfc9a0f47f42a13e1945e561d8>>
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewListAllTournamentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewListAllTournamentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c83a6b5ca241ffd6012a762939faf5f6",
    "id": null,
    "metadata": {},
    "name": "viewListAllTournamentsQuery",
    "operationKind": "query",
    "text": "query viewListAllTournamentsQuery {\n  tournaments {\n    id\n    name\n    year\n  }\n}\n"
  }
};
})();

node.hash = "08ee54439a6f5a25d07ac320dafce1e8";

module.exports = node;
