import React, { useState } from "react";

import PlayerStats from "./playerstats/PlayerStats";
import ScoreCard from "./scorecard/ScoreCard";

import RelayEnvironment from "../../../RelayEnvironment";

import graphql from "babel-plugin-relay/macro";

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";

// const coursesQuery = graphql`
//   query viewCoursesQuery {
//     allCourses {
//       nodes {
//         id
//         name
//       }
//     }
//   }
// `;
// const coursesQueryReference = loadQuery(RelayEnvironment, coursesQuery);

const holesQuery = graphql`
  query viewGetHolesForCourseQuery($courseId: BigInt!, $playerId: BigInt!) {
    allHoles(condition: { courseId: $courseId }) {
      nodes {
        id
        index
        nr
        par
        scoresByHoleId(
          condition: { courseId: $courseId, playerId: $playerId }
        ) {
          nodes {
            id
            nodeId
            strokes
            points
          }
        }
      }
    }
  }
`;

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function TourneyApp(props) {
  const [hcpStrokes, setHcpStrokes] = useState("");

  // TODO - Should not be called here
  // Should not be inside a react render function
  const holesQueryReference = loadQuery(RelayEnvironment, holesQuery, {
    playerId: props.playerId,
    courseId: 1,
  });
  const data = usePreloadedQuery(holesQuery, holesQueryReference);

  console.log(`tourney app: data: ${data}`);
  console.log(data);

  const {
    allHoles: { nodes },
  } = data;

  if (nodes.length > 0) {
    const id = nodes[0].id;

    console.log(`id:`);
    console.log(id);
    // Set the extra strokes here (?)

    return (
      <div className="TourneyApp">
        <header className="TourneyApp-header">
          <p>{id}</p>
          <PlayerStats
            id={id}
            onChange={(extraStrokes) => {
              setHcpStrokes(extraStrokes);
            }}
          />
          {
            <ScoreCard
              playerId={props.playerId}
              courseId={1}
              courseData={nodes}
              extraStrokes={hcpStrokes}
            />
          }
        </header>
      </div>
    );
  }
  return (
    <div className="TourneyApp">
      <header className="TourneyApp-header">
        <p>No data present...</p>
      </header>
    </div>
  );
}

function TourneyView(props) {
  return (
    <>
      <h1>Tourney</h1>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <React.Suspense fallback={"Loading..."}>
          <TourneyApp playerId={1} />
          {/* <ScoreCard /> */}
        </React.Suspense>
      </RelayEnvironmentProvider>
    </>
  );
}

export default TourneyView;
