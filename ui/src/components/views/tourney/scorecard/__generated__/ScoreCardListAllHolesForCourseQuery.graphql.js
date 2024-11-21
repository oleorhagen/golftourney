/**
 * @generated SignedSource<<d3e9cf4e07e54fb9332ed86da2a9ade9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "holeNr",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "condition",
        "value": {
          "name": "Skjeberg"
        }
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
          (v0/*: any*/),
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "holeIndex",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v0/*: any*/),
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
                        "kind": "Literal",
                        "name": "playerId",
                        "value": "626fa9fd-95ed-40e8-90f3-139ec79e79b9"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "extraStrokes",
                    "storageKey": "extraStrokes(playerId:\"626fa9fd-95ed-40e8-90f3-139ec79e79b9\")"
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "condition",
                        "value": {
                          "scorerId": "626fa9fd-95ed-40e8-90f3-139ec79e79b9"
                        }
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
                          (v1/*: any*/),
                          (v2/*: any*/),
                          (v0/*: any*/),
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
                    "storageKey": "holeScoresByHoleNrAndCourseName(condition:{\"scorerId\":\"626fa9fd-95ed-40e8-90f3-139ec79e79b9\"})"
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
    "storageKey": "allCourses(condition:{\"name\":\"Skjeberg\"})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ScoreCardListAllHolesForCourseQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ScoreCardListAllHolesForCourseQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a82761886779b0ca1409ecf0440cc14d",
    "id": null,
    "metadata": {},
    "name": "ScoreCardListAllHolesForCourseQuery",
    "operationKind": "query",
    "text": "query ScoreCardListAllHolesForCourseQuery {\n  allCourses(condition: {name: \"Skjeberg\"}) {\n    nodes {\n      courseRating\n      name\n      nodeId\n      nrHoles\n      slope\n      courseHolesByCourseName {\n        nodes {\n          courseName\n          holeIndex\n          holeNr\n          nodeId\n          par\n          extraStrokes(playerId: \"626fa9fd-95ed-40e8-90f3-139ec79e79b9\")\n          holeScoresByHoleNrAndCourseName(condition: {scorerId: \"626fa9fd-95ed-40e8-90f3-139ec79e79b9\"}) {\n            nodes {\n              courseName\n              holeNr\n              nodeId\n              scorerId\n              stamp\n              strokes\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "a1cd1244460abd5a0fd2a1986d1e04e6";

module.exports = node;
