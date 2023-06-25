/**
 * @generated SignedSource<<adcbbecb5d8a7862f6243ecfd838fca7>>
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
    "cacheID": "cb7c373483e7650f5cee473aaf87b55a",
    "id": null,
    "metadata": {},
    "name": "PlacementSelectionMutation",
    "operationKind": "mutation",
    "text": "mutation PlacementSelectionMutation(\n  $points: BigInt!\n  $competitionId: UUID!\n  $playerId: UUID!\n) {\n  createCompetitionScore(input: {competitionScore: {points: $points, competitionId: $competitionId, playerId: $playerId}}) {\n    clientMutationId\n    competitionScore {\n      points\n      nodeId\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "631fcba4395013831ef411b28e67010e";

module.exports = node;
