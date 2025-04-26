/**
 * @generated SignedSource<<8cd4eaea9660ff56c753778b0e1b7aa7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "courseName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "scorecardId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "scorerId"
},
v3 = [
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
  "kind": "ScalarField",
  "name": "courseName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeNr",
  "storageKey": null
},
v7 = {
  "kind": "Variable",
  "name": "playerId",
  "variableName": "scorerId"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoreCardListAllHolesForCourseSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ScoreCardListAllHolesForCourseSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
              (v4/*: any*/),
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
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "holeIndex",
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v4/*: any*/),
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
                          (v7/*: any*/)
                        ],
                        "kind": "ScalarField",
                        "name": "extraStrokes",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": [
                          (v7/*: any*/),
                          {
                            "kind": "Variable",
                            "name": "scorecardId",
                            "variableName": "scorecardId"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "points",
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
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v4/*: any*/),
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
                                "name": "scorecardId",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "points",
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
    "cacheID": "000065bae4530bc6864c1f053b040f04",
    "id": null,
    "metadata": {},
    "name": "ScoreCardListAllHolesForCourseSubscription",
    "operationKind": "subscription",
    "text": "subscription ScoreCardListAllHolesForCourseSubscription(\n  $courseName: String!\n  $scorerId: UUID!\n  $scorecardId: UUID!\n) {\n  courses(condition: {name: $courseName}) {\n    nodes {\n      ...ScoreCardListAllHolesForCourseFragment\n      nodeId\n    }\n  }\n}\n\nfragment ScoreCardListAllHolesForCourseFragment on Course {\n  courseRating\n  name\n  nodeId\n  nrHoles\n  slope\n  courseHolesByCourseName {\n    nodes {\n      courseName\n      holeIndex\n      holeNr\n      nodeId\n      par\n      extraStrokes(playerId: $scorerId)\n      points(playerId: $scorerId, scorecardId: $scorecardId)\n      holeScoresByHoleNrAndCourseName(condition: {scorerId: $scorerId}) {\n        nodes {\n          ...SelectScoreAutoWidthFragment\n          nodeId\n        }\n      }\n    }\n  }\n}\n\nfragment SelectScoreAutoWidthFragment on HoleScore {\n  courseName\n  holeNr\n  nodeId\n  scorerId\n  stamp\n  strokes\n  scorecardId\n  points\n}\n"
  }
};
})();

node.hash = "176226f08aa6dbf20ed06eef2d6f55a3";

module.exports = node;
