/**
 * @generated SignedSource<<f667cc29a62ceceee4af7a82c138bb11>>
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
    "name": "viewSetHandicapForCourseMutation",
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
    "name": "viewSetHandicapForCourseMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "e8ca6cffcd6f60118725726f4f46ba75",
    "id": null,
    "metadata": {},
    "name": "viewSetHandicapForCourseMutation",
    "operationKind": "mutation",
    "text": "mutation viewSetHandicapForCourseMutation(\n  $handicap: BigInt!\n  $playerId: UUID!\n  $courseId: UUID!\n) {\n  createCourseHandicap(input: {courseHandicap: {handicap: $handicap, playerId: $playerId, courseId: $courseId}}) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

node.hash = "cbd53e89d289e16e38f5c77fa52892ab";

module.exports = node;
