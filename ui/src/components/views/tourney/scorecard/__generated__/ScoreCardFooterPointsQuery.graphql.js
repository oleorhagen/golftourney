/**
 * @generated SignedSource<<c1d636c40acf33ea4a25610407b2a766>>
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
  "name": "playerId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "courseId_",
        "variableName": "courseId"
      },
      {
        "kind": "Variable",
        "name": "id_",
        "variableName": "playerId"
      }
    ],
    "kind": "ScalarField",
    "name": "playerPointsTotalOnCourseSpecific",
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
    "name": "ScoreCardFooterPointsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ScoreCardFooterPointsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5f59e28d14d53aa2edd9bed430f4d7d4",
    "id": null,
    "metadata": {},
    "name": "ScoreCardFooterPointsQuery",
    "operationKind": "query",
    "text": "query ScoreCardFooterPointsQuery(\n  $playerId: UUID!\n  $courseId: UUID!\n) {\n  playerPointsTotalOnCourseSpecific(id_: $playerId, courseId_: $courseId)\n}\n"
  }
};
})();

node.hash = "e04cf408e404e4c003beb70819280aeb";

module.exports = node;
