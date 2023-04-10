/**
 * @generated SignedSource<<d264f3397c53eaad6ab1d3cc037c6000>>
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
    "name": "courseId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "playerId"
  }
],
v1 = {
  "kind": "Variable",
  "name": "courseId",
  "variableName": "courseId"
},
v2 = [
  {
    "fields": [
      (v1/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "condition"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "index",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nr",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "par",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": [
    {
      "fields": [
        (v1/*: any*/),
        {
          "kind": "Variable",
          "name": "playerId",
          "variableName": "playerId"
        }
      ],
      "kind": "ObjectValue",
      "name": "condition"
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
        (v3/*: any*/),
        (v7/*: any*/),
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
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "viewGetHolesForCourseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v8/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "viewGetHolesForCourseQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v8/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "05585ad30f5ea5629469856aae5a66e9",
    "id": null,
    "metadata": {},
    "name": "viewGetHolesForCourseQuery",
    "operationKind": "query",
    "text": "query viewGetHolesForCourseQuery(\n  $courseId: BigInt!\n  $playerId: BigInt!\n) {\n  allHoles(condition: {courseId: $courseId}) {\n    nodes {\n      id\n      index\n      nr\n      par\n      scoresByHoleId(condition: {courseId: $courseId, playerId: $playerId}) {\n        nodes {\n          id\n          nodeId\n          strokes\n          points\n        }\n      }\n      nodeId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "1d1166512aa49ca2d56358b1e2b76fe8";

module.exports = node;
