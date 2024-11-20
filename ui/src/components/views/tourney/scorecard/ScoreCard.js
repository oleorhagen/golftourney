import React, { useState } from "react";

import graphql from "babel-plugin-relay/macro";

import ScoreCardTable from "./ScoreCardTable";
import ScoreCardFooter from "./ScoreCardFooter";

import { loadQuery, useLazyLoadQuery } from "react-relay/hooks";

const ListAllCoursesAndHolesQuery = graphql`
  query ScoreCardListAllHolesForCourseQuery {
    allCourses(condition: { name: "Skjeberg" }) {
      nodes {
        courseRating
        name
        nodeId
        nrHoles
        slope
        courseHolesByCourseName {
          nodes {
            courseName
            holeIndex
            holeNr
            nodeId
            par
            holeScoresByHoleNrAndCourseName(
              condition: { scorerId: "626fa9fd-95ed-40e8-90f3-139ec79e79b9" }
            ) {
              nodes {
                courseName
                holeNr
                nodeId
                scorerId
                stamp
                strokes
              }
            }
          }
        }
      }
    }
  }
`;

export const ScoreCard = (props) => {
  const data = useLazyLoadQuery(
    ListAllCoursesAndHolesQuery,
    { id: props.playerId, courseName: props.courseName },
    { fetchPolicy: "network-only" },
  );

    const courseHoles = data?.allCourses?.nodes[0].courseHolesByCourseName.nodes || [];

    // Need to pass in:
    // The holes
    //
    // This is the info I get from the nodes
    //
    // courseName: "Skjeberg"
    // ​​​​​​​​
    // holeIndex: "13"
    // ​​​​​​​​
    // holeNr: "2"
    // ​​​​​​​​
    // holeScoresByHoleNrAndCourseName: {…}
    // ​​​​​​​​
    // nodeId: "WyJjb3Vyc2VfaG9sZXMiLDIsIlNramViZXJnIl0="
    // ​​​​​​​​
    // par: "3"

  return (
    <>
      <ScoreCardTable
        holes={courseHoles}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
