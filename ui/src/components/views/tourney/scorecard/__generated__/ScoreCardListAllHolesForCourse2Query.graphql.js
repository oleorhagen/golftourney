/**
 * @generated SignedSource<<c6b8b9e15ed7f71c60f71ccb88f32ec0>>
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
  "name": "courseRating",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "kind": "ScalarField",
  "name": "nrHoles",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slope",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseName",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeIndex",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeNr",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "par",
  "storageKey": null
},
v11 = {
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
v12 = [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoreCardListAllHolesForCourse2Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v4/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": (v12/*: any*/),
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
    "name": "ScoreCardListAllHolesForCourse2Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
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
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v4/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": (v12/*: any*/),
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
                              (v7/*: any*/),
                              (v9/*: any*/),
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
    "cacheID": "9709458bb745473d61b3b8861b1c5324",
    "id": null,
    "metadata": {},
    "name": "ScoreCardListAllHolesForCourse2Query",
    "operationKind": "query",
    "text": "query ScoreCardListAllHolesForCourse2Query(\n  $courseName: String!\n  $scorerId: UUID!\n) {\n  allCourses(condition: {name: $courseName}) {\n    nodes {\n      courseRating\n      name\n      nodeId\n      nrHoles\n      slope\n      courseHolesByCourseName {\n        nodes {\n          courseName\n          holeIndex\n          holeNr\n          nodeId\n          par\n          extraStrokes(playerId: $scorerId)\n          holeScoresByHoleNrAndCourseName(condition: {scorerId: $scorerId}) {\n            nodes {\n              ...SelectScoreAutoWidthFragment\n              nodeId\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SelectScoreAutoWidthFragment on HoleScore {\n  courseName\n  holeNr\n  nodeId\n  scorerId\n  stamp\n  strokes\n  tournamentId\n}\n"
  }
};
})();

node.hash = "750eae7c54e4f443b51a6c9152845f3b";

module.exports = node;
