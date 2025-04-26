/**
 * @generated SignedSource<<e6c7bbd71a571c63d189ac135b0077b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "handicap"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "handicap",
                "variableName": "handicap"
              }
            ],
            "kind": "ObjectValue",
            "name": "courseHandicapPatch"
          },
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UpdateCourseHandicapPayload",
    "kind": "LinkedField",
    "name": "updateCourseHandicapById",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CourseHandicap",
        "kind": "LinkedField",
        "name": "courseHandicap",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "handicap",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "courseId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "playerId",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayerStatsUpdateCourseHandicapMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PlayerStatsUpdateCourseHandicapMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "02fb69ea3d2593fba985b3c1d0a642ba",
    "id": null,
    "metadata": {},
    "name": "PlayerStatsUpdateCourseHandicapMutation",
    "operationKind": "mutation",
    "text": "mutation PlayerStatsUpdateCourseHandicapMutation(\n  $id: UUID!\n  $handicap: BigInt!\n) {\n  updateCourseHandicapById(input: {courseHandicapPatch: {handicap: $handicap}, id: $id}) {\n    clientMutationId\n    courseHandicap {\n      handicap\n      id\n      nodeId\n      courseId\n      createdAt\n      playerId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "0110a41c461ead381c3c2a480594f80d";

module.exports = node;
