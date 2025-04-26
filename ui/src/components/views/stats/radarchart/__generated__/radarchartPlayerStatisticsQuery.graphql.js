/**
 * @generated SignedSource<<a81f6bce305184cbae8f7ede73df0a74>>
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
    "name": "scorerId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "scorerId",
            "variableName": "scorerId"
          }
        ],
        "kind": "ObjectValue",
        "name": "condition"
      }
    ],
    "concreteType": "PlayerStatisticsConnection",
    "kind": "LinkedField",
    "name": "playerStatistics",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PlayerStatistic",
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
            "name": "par",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "averageStrokes",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "averagePoints",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "stddevPoints",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "stddevStrokes",
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
    "name": "radarchartPlayerStatisticsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "radarchartPlayerStatisticsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f0d5aa340d649f105bc92803fe5fc2be",
    "id": null,
    "metadata": {},
    "name": "radarchartPlayerStatisticsQuery",
    "operationKind": "query",
    "text": "query radarchartPlayerStatisticsQuery(\n  $scorerId: UUID!\n) {\n  playerStatistics(condition: {scorerId: $scorerId}) {\n    nodes {\n      scorerId\n      par\n      averageStrokes\n      averagePoints\n      stddevPoints\n      stddevStrokes\n    }\n  }\n}\n"
  }
};
})();

node.hash = "3fb52de5dfc1780bc8bb005a5364cf0c";

module.exports = node;
