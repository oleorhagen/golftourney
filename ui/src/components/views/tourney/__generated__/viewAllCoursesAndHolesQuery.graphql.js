/**
 * @generated SignedSource<<708fec398afc1551699925ee6375f761>>
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
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "courseId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v4 = {
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
        (v2/*: any*/),
        (v0/*: any*/),
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
        (v3/*: any*/),
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "condition",
              "value": {
                "playerId": "1"
              }
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "holeId",
                  "storageKey": null
                },
                (v3/*: any*/),
                (v2/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": "scoresByHoleId(condition:{\"playerId\":\"1\"})"
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
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
              (v0/*: any*/),
              (v1/*: any*/),
              (v4/*: any*/)
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
    "argumentDefinitions": [],
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
              (v0/*: any*/),
              (v1/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e6fbcab014e063c308bd7ff3ea3628ad",
    "id": null,
    "metadata": {},
    "name": "viewAllCoursesAndHolesQuery",
    "operationKind": "query",
    "text": "query viewAllCoursesAndHolesQuery {\n  allCourses {\n    nodes {\n      id\n      name\n      holesByCourseId {\n        nodes {\n          courseId\n          id\n          index\n          nr\n          par\n          nodeId\n          scoresByHoleId(condition: {playerId: \"1\"}) {\n            nodes {\n              points\n              strokes\n              id\n              holeId\n              nodeId\n              courseId\n            }\n          }\n        }\n      }\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "3f8777870e13f357954e021a5704a8d7";

module.exports = node;
