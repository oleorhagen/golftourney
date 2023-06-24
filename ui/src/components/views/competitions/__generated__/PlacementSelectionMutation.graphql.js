/**
 * @generated SignedSource<<4e7ec55e9ffca33d8635d6f9acc691d8>>
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
  "name": "playerId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "points"
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
                "name": "playerId",
                "variableName": "playerId"
              },
              {
                "kind": "Variable",
                "name": "points",
                "variableName": "points"
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "PlacementSelectionMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "734354732c0b1857c77e92639cea22a6",
    "id": null,
    "metadata": {},
    "name": "PlacementSelectionMutation",
    "operationKind": "mutation",
    "text": "mutation PlacementSelectionMutation(\n  $points: BigInt!\n  $competitionId: UUID!\n  $playerId: UUID!\n) {\n  createCompetitionScore(input: {competitionScore: {points: $points, competitionId: $competitionId, playerId: $playerId}}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

node.hash = "ad733c525649d63d424114016321077d";

module.exports = node;
