import React, { useState } from "react";

import { Box, Tab, Tabs, Typography } from "@mui/material";

import PlayerStats from "./playerstats/PlayerStats";
import ScoreCard from "./scorecard/ScoreCard";
import TourneyGraph from "./scoregraph/scoreGraph";

import RelayEnvironment from "../../../RelayEnvironment";

import graphql from "babel-plugin-relay/macro";

import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
} from "react-relay/hooks";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const coursesQuery = graphql`
  query viewCoursesQuery {
    allCourses {
      nodes {
        id
        name
      }
    }
  }
`;
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
  // const data = useLazyLoadQuery(holesQuery, holesQueryReference);

  const course_data = useLazyLoadQuery(coursesQuery);
  console.log("course data:");
  console.log(course_data);

  var course_nodes = [];

  {
    const {
      allCourses: { nodes },
    } = course_data;
    course_nodes = nodes;
  }

  console.log("course nodes:");
  console.log(course_nodes);

  const data = useLazyLoadQuery(holesQuery, {
    playerId: 1,
    courseId: 1,
  });

  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log("Handle tab change");
    console.log(event);
    setValue(newValue);
  };

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
        <div className="TourneyApp-header">
          <p>{id}</p>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleTabChange} centered>
              {course_nodes.map((n) => (
                <Tab label={n.name} />
              ))}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div>
              Hakadal
              <PlayerStats
                id={id}
                onChange={(extraStrokes) => {
                  setHcpStrokes(extraStrokes);
                }}
              />
              <ScoreCard
                playerId={props.playerId}
                courseId={1}
                courseData={nodes}
                extraStrokes={hcpStrokes}
              />
            </div>
          </CustomTabPanel>
          {/* <TourneyGraph /> */}
        </div>
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
        </React.Suspense>
      </RelayEnvironmentProvider>
    </>
  );
}

export default TourneyView;
