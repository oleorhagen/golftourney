/**
 * @generated SignedSource<<549d095dfbc944bad48c7773694ada8c>>
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
    "name": "playerId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CompetitionsConnection",
    "kind": "LinkedField",
    "name": "allCompetitions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Competition",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "competitionType",
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "fields": [
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
            "concreteType": "CompetitionScoresConnection",
            "kind": "LinkedField",
            "name": "competitionScoresByCompetitionId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CompetitionScore",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "competitionId",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  (v2/*: any*/),
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
                    "name": "playerId",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
    "name": "viewCompetitionsQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "viewCompetitionsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "85dcb36a1e8cc0c68ada3fe6d3d429a4",
    "id": null,
    "metadata": {},
    "name": "viewCompetitionsQuery",
    "operationKind": "query",
    "text": "query viewCompetitionsQuery(\n  $playerId: UUID!\n) {\n  allCompetitions {\n    nodes {\n      competitionType\n      id\n      nodeId\n      competitionScoresByCompetitionId(condition: {playerId: $playerId}) {\n        nodes {\n          competitionId\n          id\n          nodeId\n          points\n          playerId\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "38ae7a0e2f1c975bf9e8f43486ce66f3";

module.exports = node;
