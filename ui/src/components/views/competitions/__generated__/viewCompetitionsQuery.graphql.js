/**
 * @generated SignedSource<<f1c1159629f4677923e76dd895d2af02>>
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
                    "name": "placement",
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
    "cacheID": "22f96b64fda179453df404e0f38f883f",
    "id": null,
    "metadata": {},
    "name": "viewCompetitionsQuery",
    "operationKind": "query",
    "text": "query viewCompetitionsQuery(\n  $playerId: UUID!\n) {\n  allCompetitions {\n    nodes {\n      competitionType\n      id\n      nodeId\n      competitionScoresByCompetitionId(condition: {playerId: $playerId}) {\n        nodes {\n          competitionId\n          id\n          nodeId\n          placement\n          playerId\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "ca08f4ee98b6057b559033bc945919de";

module.exports = node;
