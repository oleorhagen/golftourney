/**
 * @generated SignedSource<<42f37e59f4cb4d8f00461207f35fabf3>>
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
    "name": "nodeId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "strokes"
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
            "name": "nodeId",
            "variableName": "nodeId"
          },
          {
            "fields": [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "74b5ae40dc810799614245398ebc78d3",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthMutation(\n  $nodeId: ID!\n  $strokes: BigInt!\n) {\n  updateScore(input: {nodeId: $nodeId, scorePatch: {strokes: $strokes}}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

node.hash = "383578ba7de744cbbc4e528f948868c7";

module.exports = node;
