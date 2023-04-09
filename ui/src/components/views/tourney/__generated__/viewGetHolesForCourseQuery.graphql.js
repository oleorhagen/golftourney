/**
 * @generated SignedSource<<3b38aa6de580bac27baa7d42f4adf7ae>>
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
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "condition",
      "value": {
        "courseId": "1",
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
        (v5/*: any*/),
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
          "name": "points",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "scoresByHoleId(condition:{\"courseId\":\"1\",\"playerId\":\"1\"})"
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
              (v4/*: any*/),
              (v6/*: any*/)
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
              (v6/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allHoles(condition:{\"courseId\":\"1\"})"
      }
    ]
  },
  "params": {
    "cacheID": "bce637d22ac54ff3108e6241ebd63507",
    "id": null,
    "metadata": {},
    "name": "viewGetHolesForCourseQuery",
    "operationKind": "query",
    "text": "query viewGetHolesForCourseQuery {\n  allHoles(condition: {courseId: \"1\"}) {\n    nodes {\n      id\n      index\n      nr\n      par\n      scoresByHoleId(condition: {courseId: \"1\", playerId: \"1\"}) {\n        nodes {\n          nodeId\n          strokes\n          points\n        }\n      }\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "57519da619977a27c13c5bd750728dfb";

module.exports = node;
