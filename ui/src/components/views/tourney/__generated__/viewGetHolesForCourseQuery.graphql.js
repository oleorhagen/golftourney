/**
 * @generated SignedSource<<65a58ef0eaec5518dab317e8a7e0502e>>
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
        (v1/*: any*/),
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
    "cacheID": "ba5f9bb9d2e0c0e3172fc6441e0262a5",
    "id": null,
    "metadata": {},
    "name": "viewGetHolesForCourseQuery",
    "operationKind": "query",
    "text": "query viewGetHolesForCourseQuery {\n  allHoles(condition: {courseId: \"1\"}) {\n    nodes {\n      id\n      index\n      nr\n      par\n      scoresByHoleId(condition: {courseId: \"1\", playerId: \"1\"}) {\n        nodes {\n          id\n          nodeId\n          strokes\n          points\n        }\n      }\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "a610bc7ea8d26b603d23f76cb7ff10af";

module.exports = node;
