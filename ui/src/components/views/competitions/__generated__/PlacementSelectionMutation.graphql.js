/**
 * @generated SignedSource<<1eea778a3ab38d947d72d6e32306f7fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "competitionId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "placement"
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
            "fields": [
              {
                "kind": "Variable",
                "name": "competitionId",
                "variableName": "competitionId"
              },
              {
                "kind": "Variable",
                "name": "placement",
                "variableName": "placement"
              },
              {
                "kind": "Variable",
                "name": "playerId",
                "variableName": "playerId"
              }
            ],
            "kind": "ObjectValue",
            "name": "competitionScore"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateCompetitionScorePayload",
    "kind": "LinkedField",
    "name": "createCompetitionScore",
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
    "name": "PlacementSelectionMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
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
    "name": "PlacementSelectionMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "17469746348bb4ea9d34b5e2c002bec1",
    "id": null,
    "metadata": {},
    "name": "PlacementSelectionMutation",
    "operationKind": "mutation",
    "text": "mutation PlacementSelectionMutation(\n  $placement: BigInt!\n  $competitionId: UUID!\n  $playerId: UUID!\n) {\n  createCompetitionScore(input: {competitionScore: {placement: $placement, competitionId: $competitionId, playerId: $playerId}}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

node.hash = "e667081611d2c3bccf6d2e0e4e89b3d7";

module.exports = node;
