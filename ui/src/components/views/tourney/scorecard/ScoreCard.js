import React, { useState } from "react";

import graphql from "babel-plugin-relay/macro";

import ScoreCardTable from "./ScoreCardTable";
import ScoreCardFooter from "./ScoreCardFooter";

import { loadQuery, useLazyLoadQuery } from "react-relay/hooks";

const ListAllCoursesAndHolesQuery = graphql`
  query ScoreCardListAllHolesForCourseQuery(
    $courseName: String!
    $scorerId: UUID!
  ) {
    allCourses(condition: { name: $courseName }) {
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
            extraStrokes(playerId: $scorerId)
            holeScoresByHoleNrAndCourseName(
              condition: { scorerId: $scorerId }
            ) {
              nodes {
                ...SelectScoreAutoWidthFragment
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
    { scorerId: props.playerId, courseName: props.courseName },
    { fetchPolicy: "network-only" },
  );

  const courseHoles =
    data?.allCourses?.nodes[0].courseHolesByCourseName.nodes || [];

  return (
    <>
      <ScoreCardTable
        playerId={props.playerId}
        courseName={props.courseName}
        holes={courseHoles}
      />
      <ScoreCardFooter />
    </>
  );
};

export default ScoreCard;
