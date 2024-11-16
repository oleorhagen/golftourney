/**
 * @generated SignedSource<<7aee5391e2c3fbe0de8992b1b3bae87b>>
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
            "name": "name",
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
            "kind": "ScalarField",
            "name": "courseRating",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nrHoles",
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
    "name": "viewListAllCoursesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewListAllCoursesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "239e6c407a5d4f484678e0de321b9880",
    "id": null,
    "metadata": {},
    "name": "viewListAllCoursesQuery",
    "operationKind": "query",
    "text": "query viewListAllCoursesQuery {\n  allCourses {\n    nodes {\n      name\n      slope\n      courseRating\n      nrHoles\n    }\n  }\n}\n"
  }
};
})();

node.hash = "44df6b65a9132b8c1f3b746897b12625";

module.exports = node;
