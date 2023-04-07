/**
 * @generated SignedSource<<bea8f60899baca00e7d2b921311c9b02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "courseId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "holeId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
},
v3 = [
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
            "name": "holeId",
            "variableName": "holeId"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthGetHolesQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SelectScoreAutoWidthGetHolesQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5033816003ba5be05b802b5a9790cbda",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthGetHolesQuery",
    "operationKind": "query",
    "text": "query SelectScoreAutoWidthGetHolesQuery(\n  $holeId: BigInt\n  $courseId: BigInt\n  $playerId: BigInt\n) {\n  allScores(condition: {holeId: $holeId, courseId: $courseId, playerId: $playerId}) {\n    nodes {\n      nodeId\n      nr\n    }\n  }\n}\n"
  }
};
})();

node.hash = "98113591207bbdd91cca746ce9f6c08a";

module.exports = node;
