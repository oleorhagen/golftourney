/**
 * @generated SignedSource<<76075762921e955fad443e32e0b03eeb>>
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeNr",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
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
          (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "holeIndex",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v1/*: any*/),
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
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v1/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoreCardListAllHolesForCourseQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ScoreCardListAllHolesForCourseQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "1449b8a2347268007d9b7db8c7027930",
    "id": null,
    "metadata": {},
    "name": "ScoreCardListAllHolesForCourseQuery",
    "operationKind": "query",
    "text": "query ScoreCardListAllHolesForCourseQuery(\n  $courseName: String!\n  $scorerId: UUID!\n) {\n  allCourses(condition: {name: $courseName}) {\n    nodes {\n      courseRating\n      name\n      nodeId\n      nrHoles\n      slope\n      courseHolesByCourseName {\n        nodes {\n          courseName\n          holeIndex\n          holeNr\n          nodeId\n          par\n          extraStrokes(playerId: $scorerId)\n          holeScoresByHoleNrAndCourseName(condition: {scorerId: $scorerId}) {\n            nodes {\n              courseName\n              holeNr\n              nodeId\n              scorerId\n              stamp\n              strokes\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "04932ad19de2c6155061dee8d3ddc1ee";

module.exports = node;
