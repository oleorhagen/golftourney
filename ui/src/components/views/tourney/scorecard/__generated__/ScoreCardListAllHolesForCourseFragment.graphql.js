/**
 * @generated SignedSource<<eb738dcdb69f5e355284bc2df15f6c49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v1 = {
  "kind": "Variable",
  "name": "playerId",
  "variableName": "scorerId"
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "scorecardId"
    },
    {
      "kind": "RootArgument",
      "name": "scorerId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScoreCardListAllHolesForCourseFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "courseRating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "nrHoles",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slope",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CourseHolesConnection",
      "kind": "LinkedField",
      "name": "courseHolesByCourseName",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CourseHole",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "courseName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "holeIndex",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "holeNr",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "par",
              "storageKey": null
            },
            {
              "alias": null,
              "args": [
                (v1/*: any*/)
              ],
              "kind": "ScalarField",
              "name": "extraStrokes",
              "storageKey": null
            },
            {
              "alias": null,
              "args": [
                (v1/*: any*/),
                {
                  "kind": "Variable",
                  "name": "scorecardId",
                  "variableName": "scorecardId"
                }
              ],
              "kind": "ScalarField",
              "name": "points",
              "storageKey": null
            },
            {
              "alias": null,
              "args": [
                {
                  "fields": [
                    {
                      "kind": "Variable",
                      "name": "scorerId",
                      "variableName": "scorerId"
                    }
                  ],
                  "kind": "ObjectValue",
                  "name": "condition"
                }
              ],
              "concreteType": "HoleScoresConnection",
              "kind": "LinkedField",
              "name": "holeScoresByHoleNrAndCourseName",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "HoleScore",
                  "kind": "LinkedField",
                  "name": "nodes",
                  "plural": true,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "SelectScoreAutoWidthFragment"
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
      ],
      "storageKey": null
    }
  ],
  "type": "Course",
  "abstractKey": null
};
})();

node.hash = "3d871987a02ccad43e80d0a56c5e91db";

module.exports = node;
