/**
 * @generated SignedSource<<7db2261f6079aa86b0f84ac4d91cbe0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "courseId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "handicap"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "playerId"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "courseId",
                "variableName": "courseId"
              },
              {
                "kind": "Variable",
                "name": "handicap",
                "variableName": "handicap"
              },
              {
                "kind": "Variable",
                "name": "playerId",
                "variableName": "playerId"
              }
            ],
            "kind": "ObjectValue",
            "name": "courseHandicap"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "CreateCourseHandicapPayload",
    "kind": "LinkedField",
    "name": "createCourseHandicap",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlayerStatsSetHandicapMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PlayerStatsSetHandicapMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "de7c7f7a01f826bf86b598cba8f979ce",
    "id": null,
    "metadata": {},
    "name": "PlayerStatsSetHandicapMutation",
    "operationKind": "mutation",
    "text": "mutation PlayerStatsSetHandicapMutation(\n  $handicap: BigInt!\n  $playerId: UUID!\n  $courseId: UUID!\n) {\n  createCourseHandicap(input: {courseHandicap: {handicap: $handicap, playerId: $playerId, courseId: $courseId}}) {\n    clientMutationId\n    courseHandicap {\n      handicap\n      id\n      nodeId\n      courseId\n      createdAt\n      playerId\n    }\n  }\n}\n"
  }
};
})();

node.hash = "15290171a303236d6625e62bfa49f506";

module.exports = node;
