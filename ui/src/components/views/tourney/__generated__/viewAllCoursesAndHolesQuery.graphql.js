/**
 * @generated SignedSource<<74ad79bd0a8efe51439aa9a7243e06a1>>
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "HolesConnection",
  "kind": "LinkedField",
  "name": "holesByCourseId",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Hole",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "index",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "nr",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "par",
          "storageKey": null
        },
        (v4/*: any*/),
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
          "concreteType": "ScoresConnection",
          "kind": "LinkedField",
          "name": "scoresByHoleId",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Score",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
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
                  "name": "strokes",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "holeId",
                  "storageKey": null
                },
                (v4/*: any*/),
                (v3/*: any*/)
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "viewAllCoursesAndHolesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CoursesConnection",
        "kind": "LinkedField",
        "name": "allCourses",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CourseHandicapsConnection",
                "kind": "LinkedField",
                "name": "courseHandicapsByCourseId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CourseHandicap",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "PlayerStatsHandicapFragment"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ScoreCardTableHandicapFragment"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "viewAllCoursesAndHolesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CoursesConnection",
        "kind": "LinkedField",
        "name": "allCourses",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Course",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CourseHandicapsConnection",
                "kind": "LinkedField",
                "name": "courseHandicapsByCourseId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CourseHandicap",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "handicap",
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      (v4/*: any*/),
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
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c45c6a5c1d04d839d821bb928c3f58d9",
    "id": null,
    "metadata": {},
    "name": "viewAllCoursesAndHolesQuery",
    "operationKind": "query",
    "text": "query viewAllCoursesAndHolesQuery(\n  $playerId: UUID!\n) {\n  allCourses {\n    nodes {\n      id\n      name\n      holesByCourseId {\n        nodes {\n          courseId\n          id\n          index\n          nr\n          par\n          nodeId\n          scoresByHoleId(condition: {playerId: $playerId}) {\n            nodes {\n              points\n              strokes\n              id\n              holeId\n              nodeId\n              courseId\n            }\n          }\n        }\n      }\n      courseHandicapsByCourseId {\n        nodes {\n          ...PlayerStatsHandicapFragment\n          ...ScoreCardTableHandicapFragment\n          nodeId\n        }\n      }\n      nodeId\n    }\n  }\n}\n\nfragment PlayerStatsHandicapFragment on CourseHandicap {\n  courseId\n  createdAt\n  handicap\n  id\n  nodeId\n  playerId\n}\n\nfragment ScoreCardTableHandicapFragment on CourseHandicap {\n  courseId\n  createdAt\n  handicap\n  id\n  nodeId\n  playerId\n}\n"
  }
};
})();

node.hash = "a4028bbba8e5f067a9d02fced3b61e05";

module.exports = node;
