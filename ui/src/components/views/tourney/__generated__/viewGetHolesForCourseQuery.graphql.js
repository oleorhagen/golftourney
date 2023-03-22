/**
 * @generated SignedSource<<73f21a1bf9d5eaa99c637dacd03f15b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "condition",
    "value": {
      "courseId": "1"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nr",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "par",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "viewGetHolesForCourseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "HolesConnection",
        "kind": "LinkedField",
        "name": "allHoles",
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
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allHoles(condition:{\"courseId\":\"1\"})"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "viewGetHolesForCourseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "HolesConnection",
        "kind": "LinkedField",
        "name": "allHoles",
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
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
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
        "storageKey": "allHoles(condition:{\"courseId\":\"1\"})"
      }
    ]
  },
  "params": {
    "cacheID": "06a4802aa4003b1b67a10b441596565c",
    "id": null,
    "metadata": {},
    "name": "viewGetHolesForCourseQuery",
    "operationKind": "query",
    "text": "query viewGetHolesForCourseQuery {\n  allHoles(condition: {courseId: \"1\"}) {\n    nodes {\n      id\n      index\n      nr\n      par\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "969f2fd32473edfe2608f4d79f71ac05";

module.exports = node;
