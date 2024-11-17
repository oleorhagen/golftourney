/**
 * @generated SignedSource<<d901ed70bee592dd3d14018fad8add35>>
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
  "name": "courseRating",
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
  "name": "nrHoles",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slope",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewListAllCoursesPlaceholderForLeaderBoardQuery",
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
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "viewListAllCoursesPlaceholderForLeaderBoardQuery",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nodeId",
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
    "cacheID": "4fe5708455f45b8165eadc48b4fa45db",
    "id": null,
    "metadata": {},
    "name": "viewListAllCoursesPlaceholderForLeaderBoardQuery",
    "operationKind": "query",
    "text": "query viewListAllCoursesPlaceholderForLeaderBoardQuery {\n  allCourses {\n    nodes {\n      courseRating\n      name\n      nrHoles\n      slope\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "c5f4d82824048ca2299571f0fc4a824b";

module.exports = node;
