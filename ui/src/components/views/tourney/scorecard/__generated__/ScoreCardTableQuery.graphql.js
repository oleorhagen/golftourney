/**
 * @generated SignedSource<<01a1fb527d9fb488fe8678da7283c226>>
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
    "name": "courseId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "playerId"
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
            "name": "courseId",
            "variableName": "courseId"
          },
          {
            "kind": "Variable",
            "name": "playerId",
            "variableName": "playerId"
          }
        ],
        "kind": "ObjectValue",
        "name": "condition"
      }
    ],
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "holeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nr",
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
    "name": "ScoreCardTableQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScoreCardTableQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6417c0e8cdfd975395b14efb088af32f",
    "id": null,
    "metadata": {},
    "name": "ScoreCardTableQuery",
    "operationKind": "query",
    "text": "query ScoreCardTableQuery(\n  $courseId: BigInt\n  $playerId: BigInt\n) {\n  allScores(condition: {courseId: $courseId, playerId: $playerId}) {\n    nodes {\n      nodeId\n      holeId\n      nr\n    }\n  }\n}\n"
  }
};
})();

node.hash = "d7a9af47af01295f2e1885865e390d95";

module.exports = node;
