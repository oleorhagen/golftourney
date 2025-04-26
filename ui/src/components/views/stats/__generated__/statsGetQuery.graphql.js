/**
 * @generated SignedSource<<f3f05ba74cba426f19c5cd994208aed5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tournamentId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "equalTo",
                "variableName": "tournamentId"
              }
            ],
            "kind": "ObjectValue",
            "name": "tournamentId"
          }
        ],
        "kind": "ObjectValue",
        "name": "filter"
      }
    ],
    "concreteType": "StatisticsConnection",
    "kind": "LinkedField",
    "name": "statistics",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StatisticsRecord",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "expectedPoints",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "playerPar",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalPoints",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "statsGetQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "statsGetQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "27b4c778e93d910fc3b4a52cd613cdf3",
    "id": null,
    "metadata": {},
    "name": "statsGetQuery",
    "operationKind": "query",
    "text": "query statsGetQuery(\n  $tournamentId: UUID!\n) {\n  statistics(filter: {tournamentId: {equalTo: $tournamentId}}) {\n    nodes {\n      scorerId\n      tournamentId\n      expectedPoints\n      playerPar\n      totalPoints\n    }\n  }\n}\n"
  }
};
})();

node.hash = "d1a6edf298e3ca0467d2c557c42f6b63";

module.exports = node;
