/**
 * @generated SignedSource<<bd84f124b802115bffb29b9a1c57a700>>
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Scorecard",
    "kind": "LinkedField",
    "name": "updateScorecard",
    "plural": false,
    "selections": [
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
        "concreteType": "ScorecardCourse",
        "kind": "LinkedField",
        "name": "course",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ScorecardHole",
            "kind": "LinkedField",
            "name": "holes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nr",
                "storageKey": null
              },
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SelectScoreAutoWidthUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SelectScoreAutoWidthUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8c8a30c23bc308575cfc3b667c8355ef",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthUpdateMutation(\n  $input: UpdateScorecard!\n) {\n  updateScorecard(input: $input) {\n    id\n    course {\n      holes {\n        nr\n        strokes\n        points\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "c661e36448f72b38324e852c09fe09da";

module.exports = node;
