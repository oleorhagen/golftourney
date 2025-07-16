/**
 * @generated SignedSource<<a813171c7ffb67afc4babd0a5a4cecf1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tournamentId"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "playerId",
        "variableName": "playerId"
      },
      {
        "kind": "Variable",
        "name": "tournamentId",
        "variableName": "tournamentId"
      }
    ],
    "kind": "ObjectValue",
    "name": "condition"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "CREATED_AT_DESC"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tournament_id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "handicap",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_at",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nr_holes",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slope",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "course_rating",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nr",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "par",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "extra_strokes",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "strokes",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "points",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "Player",
  "kind": "LinkedField",
  "name": "player",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v7/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "concreteType": "Course",
  "kind": "LinkedField",
  "name": "courses",
  "plural": true,
  "selections": [
    (v7/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewListScorecardsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Scorecard",
        "kind": "LinkedField",
        "name": "scorecards",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ScorecardCourse",
            "kind": "LinkedField",
            "name": "course",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ScorecardHole",
                "kind": "LinkedField",
                "name": "holes",
                "plural": true,
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SelectScoreAutoWidthFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v17/*: any*/)
        ],
        "storageKey": null
      },
      (v18/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "viewListScorecardsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Scorecard",
        "kind": "LinkedField",
        "name": "scorecards",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ScorecardCourse",
            "kind": "LinkedField",
            "name": "course",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ScorecardHole",
                "kind": "LinkedField",
                "name": "holes",
                "plural": true,
                "selections": [
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v17/*: any*/)
        ],
        "storageKey": null
      },
      (v18/*: any*/)
    ]
  },
  "params": {
    "cacheID": "d1f797d5bd1468f9c004e2a7eb78fd3e",
    "id": null,
    "metadata": {},
    "name": "viewListScorecardsQuery",
    "operationKind": "query",
    "text": "query viewListScorecardsQuery(\n  $tournamentId: ID!\n  $playerId: ID!\n) {\n  scorecards(condition: {tournamentId: $tournamentId, playerId: $playerId}, orderBy: CREATED_AT_DESC) {\n    id\n    tournament_id\n    handicap\n    created_at\n    course {\n      name\n      nr_holes\n      slope\n      course_rating\n      holes {\n        nr\n        index\n        par\n        extra_strokes\n        strokes\n        points\n        ...SelectScoreAutoWidthFragment\n      }\n    }\n    player {\n      id\n      name\n      handicap\n    }\n  }\n  courses {\n    name\n  }\n}\n\nfragment SelectScoreAutoWidthFragment on ScorecardHole {\n  nr\n  strokes\n}\n"
  }
};
})();

node.hash = "b055d94c3f3baab72f3cf8e17caa8315";

module.exports = node;
