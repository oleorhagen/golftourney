/**
 * @generated SignedSource<<6e3622108ee44de75de9f92a88d9776d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewListAllCoursesPlaceholderForLeaderBoardQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewListAllCoursesPlaceholderForLeaderBoardQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5a3ecec76db204ec11ac823957193a24",
    "id": null,
    "metadata": {},
    "name": "viewListAllCoursesPlaceholderForLeaderBoardQuery",
    "operationKind": "query",
    "text": "query viewListAllCoursesPlaceholderForLeaderBoardQuery {\n  allCourses {\n    nodes {\n      courseRating\n      name\n      nrHoles\n      slope\n    }\n  }\n}\n"
  }
};
})();

node.hash = "c5f4d82824048ca2299571f0fc4a824b";

module.exports = node;
