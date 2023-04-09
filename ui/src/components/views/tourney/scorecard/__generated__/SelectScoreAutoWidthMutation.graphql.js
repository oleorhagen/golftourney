/**
 * @generated SignedSource<<269efa8d4c248491dcdc4318525adf3c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nodeId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "points"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "strokes"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "nodeId",
            "variableName": "nodeId"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "points",
                "variableName": "points"
              },
              {
                "kind": "Variable",
                "name": "strokes",
                "variableName": "strokes"
              }
            ],
            "kind": "ObjectValue",
            "name": "scorePatch"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateScorePayload",
    "kind": "LinkedField",
    "name": "updateScore",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
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
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "cde6f4916baffd4585c1c4235409c5f2",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $nodeId: ID!\n  $strokes: BigInt!\n  $points: BigInt!\n) {\n  updateScore(input: {nodeId: $nodeId, scorePatch: {strokes: $strokes, points: $points}}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

node.hash = "190cf5f632acf8bc089396fa3ff51153";

module.exports = node;
