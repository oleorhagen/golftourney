/**
 * @generated SignedSource<<06a4afba58fbbe6a15e33333953a171d>>
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
  "name": "placement"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "placement",
                "variableName": "placement"
              }
            ],
            "kind": "ObjectValue",
            "name": "competitionScorePatch"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "nodeId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateCompetitionScorePayload",
    "kind": "LinkedField",
    "name": "updateCompetitionScoreById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CompetitionScore",
        "kind": "LinkedField",
        "name": "competitionScore",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "placement",
            "storageKey": null
          },
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
            "name": "id",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlacementSelectionUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PlacementSelectionUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "07e4a8e01c64fc97cd333f0e28fa2c30",
    "id": null,
    "metadata": {},
    "name": "PlacementSelectionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation PlacementSelectionUpdateMutation(\n  $placement: BigInt!\n  $nodeId: UUID!\n) {\n  updateCompetitionScoreById(input: {competitionScorePatch: {placement: $placement}, id: $nodeId}) {\n    clientMutationId\n    competitionScore {\n      placement\n      nodeId\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "b380dbac8dc8f3ce4ee2e59cb99d4120";

module.exports = node;
