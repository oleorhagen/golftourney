/**
 * @generated SignedSource<<6c3f798542e13abd3b66b9b091cbbb88>>
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewCoursesQuery",
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
              (v1/*: any*/)
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
    "name": "viewCoursesQuery",
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
    "cacheID": "13b3b27ebb32d71340dddeb57f808dc3",
    "id": null,
    "metadata": {},
    "name": "viewCoursesQuery",
    "operationKind": "query",
    "text": "query viewCoursesQuery {\n  allCourses {\n    nodes {\n      id\n      name\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "0876ad92d164858e448128091aee4797";

module.exports = node;
