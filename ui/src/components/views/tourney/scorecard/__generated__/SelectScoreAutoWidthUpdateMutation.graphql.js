/**
 * @generated SignedSource<<b8791771d34272b9e48727cdeade370a>>
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
    "cacheID": "507dfbd75e51871d8b7d7b2cc6b9b3cc",
    "id": null,
    "metadata": {},
    "name": "SelectScoreAutoWidthUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation SelectScoreAutoWidthUpdateMutation(\n  $input: UpdateScorecard!\n) {\n  updateScorecard(input: $input) {\n    id\n    course {\n      holes {\n        nr\n        strokes\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "9558bdc7b1756bb0b184c48fa81053e9";

module.exports = node;
