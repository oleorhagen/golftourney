import React, { useState } from "react";

import graphql from "babel-plugin-relay/macro";

// import ScoreCardTable from "./ScoreCardTable";
// import ScoreCardFooter from "./ScoreCardFooter";

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

  return (
    <>
      {/* <ScoreCardTable */}
      {/*   scorecard={props.scorecard} */}
      {/*   onChange={onChangeAll} */}
      {/*   data={holes} */}
      {/*   {...props} */}
      {/* /> */}
      {/* <ScoreCardFooter /> */}
    </>
  );
};

export default ScoreCard;
