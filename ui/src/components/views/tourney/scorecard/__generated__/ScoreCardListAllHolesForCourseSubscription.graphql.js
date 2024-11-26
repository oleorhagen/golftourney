/**
 * @generated SignedSource<<cd87e8e9590facfdf5265b2c3f00f8bd>>
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
    "name": "courseName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scorerId"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "courseName"
      }
    ],
    "kind": "ObjectValue",
    "name": "condition"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeNr",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoreCardListAllHolesForCourseSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CoursesConnection",
        "kind": "LinkedField",
        "name": "courses",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ScoreCardListAllHolesForCourseFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScoreCardListAllHolesForCourseSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CoursesConnection",
        "kind": "LinkedField",
        "name": "courses",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "courseRating",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nrHoles",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slope",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "CourseHolesConnection",
                "kind": "LinkedField",
                "name": "courseHolesByCourseName",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CourseHole",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "holeIndex",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "par",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Variable",
                            "name": "playerId",
                            "variableName": "scorerId"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "extraStrokes",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          {
                            "fields": [
                              {
                                "kind": "Variable",
                                "name": "scorerId",
                                "variableName": "scorerId"
                              }
                            ],
                            "kind": "ObjectValue",
                            "name": "condition"
                          }
                        ],
                        "concreteType": "HoleScoresConnection",
                        "kind": "LinkedField",
                        "name": "holeScoresByHoleNrAndCourseName",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "HoleScore",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "scorerId",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "stamp",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "strokes",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "tournamentId",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "40602f29e20da744024fded01332f9fb",
    "id": null,
    "metadata": {},
    "name": "ScoreCardListAllHolesForCourseSubscription",
    "operationKind": "subscription",
    "text": "subscription ScoreCardListAllHolesForCourseSubscription(\n  $courseName: String!\n  $scorerId: UUID!\n) {\n  courses(condition: {name: $courseName}) {\n    nodes {\n      ...ScoreCardListAllHolesForCourseFragment\n      nodeId\n    }\n  }\n}\n\nfragment ScoreCardListAllHolesForCourseFragment on Course {\n  courseRating\n  name\n  nodeId\n  nrHoles\n  slope\n  courseHolesByCourseName {\n    nodes {\n      courseName\n      holeIndex\n      holeNr\n      nodeId\n      par\n      extraStrokes(playerId: $scorerId)\n      holeScoresByHoleNrAndCourseName(condition: {scorerId: $scorerId}) {\n        nodes {\n          ...SelectScoreAutoWidthFragment\n          nodeId\n        }\n      }\n    }\n  }\n}\n\nfragment SelectScoreAutoWidthFragment on HoleScore {\n  courseName\n  holeNr\n  nodeId\n  scorerId\n  stamp\n  strokes\n  tournamentId\n}\n"
  }
};
})();

node.hash = "6918b52438ec6250fd01a4e7fdae8f7f";

module.exports = node;
