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
  query viewAllCoursesAndHolesQuery($playerId: UUID!) {
    allCourses {
      nodes {
        id
        name
        holesByCourseId {
          nodes {
            courseId
            id
            index
            nr
            par
            nodeId
            scoresByHoleId(condition: { playerId: $playerId }) {
              nodes {
                points
                strokes
                id
                holeId
                nodeId
                courseId
              }
            }
          }
        }
        courseHandicapsByCourseId {
          nodes {
            ...PlayerStatsHandicapFragment
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
  const course_data = useLazyLoadQuery(
    coursesQuery,
    {
      playerId: props.playerId,
    },
    { fetchPolicy: "network-only" }
  );
  console.log(`Tourney app course data: ${JSON.stringify(course_data)}`);

  var course_nodes = [];

  const {
    allCourses: { nodes },
  } = course_data;
  course_nodes = nodes;

  console.log("course nodes:");
  console.log(course_nodes);

  const [value, setValue] = useState(0);
  const [hcp, setHcp] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log("Handle tab change");
    console.log(event);
    setValue(newValue);
  };

  if (course_nodes.length > 0) {
    return (
      <div className="TourneyApp">
        <div className="TourneyApp-header">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              variant="fullWidth"
              orientation="vertical"
            >
              {course_nodes.map((n, i) => (
                <Tab label={n.name} key={i} />
              ))}
            </Tabs>
          </Box>
          {course_nodes.map((n, i) => {
            console.log(
              `map got: ${n.name} ${JSON.stringify(
                n.courseHandicapsByCourseId
              )}`
            );
            return (
              <CustomTabPanel value={value} index={i} key={i}>
                <div>
                  <PlayerStats
                    handicap_fragment={n.courseHandicapsByCourseId.nodes[0]}
                    course_id={n.id}
                    playerId={props.playerId}
                    onChange={(extraStrokes) => {
                      setHcp(extraStrokes);
                    }}
                  />
                  <ScoreCard
                    playerId={props.playerId}
                    courseData={n}
                    extraStrokes={hcp}
                  />
                </div>
              </CustomTabPanel>
            );
          })}
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
  console.log("tourney View");
  console.log(props);

  return (
    <>
      <h1>Tourney</h1>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <React.Suspense fallback={"Loading..."}>
          <TourneyApp playerId={"626fa9fd-95ed-40e8-90f3-139ec79e79b9"} />
        </React.Suspense>
      </RelayEnvironmentProvider>
    </>
  );
}

export default TourneyView;
