/**
 * @generated SignedSource<<e8786984fca859c79c226112f9d174be>>
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
            "name": "strokes",
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
    "cacheID": "de330f558f7fafd83a859c4877122669",
    "id": null,
    "metadata": {},
    "name": "ScoreCardTableQuery",
    "operationKind": "query",
    "text": "query ScoreCardTableQuery(\n  $courseId: BigInt\n  $playerId: BigInt\n) {\n  allScores(condition: {courseId: $courseId, playerId: $playerId}) {\n    nodes {\n      nodeId\n      holeId\n      strokes\n    }\n  }\n}\n"
  }
};
})();

node.hash = "3bafa45299493da3f56eccf5f2b6536d";

module.exports = node;
