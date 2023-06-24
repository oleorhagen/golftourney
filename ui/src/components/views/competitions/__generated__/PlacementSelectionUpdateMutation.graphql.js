/**
 * @generated SignedSource<<47e0cf27809563f4ce33b0294d40ec75>>
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
                "name": "points",
                "variableName": "points"
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
            "name": "points",
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
    "cacheID": "3bfb304b8d75af39605c034655819847",
    "id": null,
    "metadata": {},
    "name": "PlacementSelectionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation PlacementSelectionUpdateMutation(\n  $points: BigInt!\n  $nodeId: UUID!\n) {\n  updateCompetitionScoreById(input: {competitionScorePatch: {points: $points}, id: $nodeId}) {\n    clientMutationId\n    competitionScore {\n      points\n      nodeId\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "538d051ef91c3e960fb4fb72e675e43c";

module.exports = node;
