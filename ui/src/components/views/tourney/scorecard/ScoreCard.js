import React, { useState, useMemo } from "react";

import graphql from "babel-plugin-relay/macro";

import ScoreCardTable from "./ScoreCardTable";
import ScoreCardFooter from "./ScoreCardFooter";

import {
  loadQuery,
  useLazyLoadQuery,
  useSubscription,
  useFragment,
} from "react-relay/hooks";

const ListAllCoursesAndHolesSubscription = graphql`
  subscription ScoreCardListAllHolesForCourseSubscription(
    $courseName: String!
    $scorerId: UUID!
  ) {
    courses(condition: { name: $courseName }) {
      nodes {
        ...ScoreCardListAllHolesForCourseFragment
      }
    }
  }
`;

const ListAllCoursesAndHolesFragment = graphql`
  fragment ScoreCardListAllHolesForCourseFragment on Course {
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
        holeScoresByHoleNrAndCourseName(condition: { scorerId: $scorerId }) {
          nodes {
            ...SelectScoreAutoWidthFragment
          }
        }
      }
    }
  }
`;

const ListAllCoursesAndHolesQuery = graphql`
  query ScoreCardListAllHolesForCourse2Query(
    $courseName: String!
    $scorerId: UUID!
  ) {
    courses(condition: { name: $courseName }) {
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
  const [fragmentRef, setFragmentRef] = useState(null);

  const config = useMemo(
    () => ({
      variables: { scorerId: props.playerId, courseName: props.courseName },

      subscription: ListAllCoursesAndHolesSubscription,
      onNext: (res) => {
        console.log(`received res: ${JSON.stringify(res)}`);
        setFragmentRef(res);
      },
      onCompleted: () => {
        console.log("Completed!");
      },
      onError: (err) => {
        console.log(`subscription onError: ${err}`);
      },
    }),
    [props],
  );

  useSubscription(config);

  const data = useFragment(
    ListAllCoursesAndHolesFragment,
    fragmentRef?.allCourses?.nodes?.[0] || null,
  );

  const courseHoles = data?.courseHolesByCourseName.nodes || [];

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
