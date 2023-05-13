/**
 * @generated SignedSource<<daef9666795e40312271844adadc1fb6>>
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
    "cacheID": "eb718f34a4f3783fc095539d8bb61dca",
    "id": null,
    "metadata": {},
    "name": "PlayerStatsSetHandicapMutation",
    "operationKind": "mutation",
    "text": "mutation PlayerStatsSetHandicapMutation(\n  $handicap: BigInt!\n  $playerId: UUID!\n  $courseId: UUID!\n) {\n  createCourseHandicap(input: {courseHandicap: {handicap: $handicap, playerId: $playerId, courseId: $courseId}}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

node.hash = "645454e8dc524857c3ceee253005213c";

module.exports = node;
