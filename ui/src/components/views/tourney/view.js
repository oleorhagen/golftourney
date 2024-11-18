import React, { useState } from "react";

import { useOutletContext, Outlet } from "react-router-dom";
import Link from "../../router/Link";

import { Box, Tab, Tabs, Typography } from "@mui/material";

// import PlayerStats from "./playerstats/PlayerStats";
// import ScoreCard from "./scorecard/ScoreCard";

import graphql from "babel-plugin-relay/macro";

import { loadQuery, useLazyLoadQuery } from "react-relay/hooks";

const ListAllCoursesQuery = graphql`
query viewCoursesByTournamentIdQuery($id: UUID!) {
  tournamentById(id: $id) {
    tournamentCoursesByTournamentId {
      nodes {
        courseName
        nodeId
        tournamentId
      }
    }
  }
}
`;

export function RouterScoreCard() {
  // const [props] = useOutletContext();
  return <>Player Scorecard</>;
}

function ScheduleScoreCard(props) {
  const [value, setValue] = useState(0);
  const [hcp, setHcp] = useState(0);

  const data = useLazyLoadQuery(
    ListAllCoursesQuery,
    { id: props.tournamentId },
    { fetchPolicy: "network-only" },
  );

  var courseNodes =
    data?.tournamentById?.tournamentCoursesByTournamentId?.nodes || [];

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

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
            {courseNodes.map((n, i) => (
              <Tab
                component={Link}
                to={
                  "/scorecards/" +
                  n.courseName.replace(/\W+/g, "-").toLowerCase()
                }
                label={n.courseName}
                key={i}
              />
            ))}
          </Tabs>
        </Box>
        {courseNodes.map((courseNode, i) => {
          return (
            <CustomTabPanel value={value} index={i} key={i}>
              <div>
                <Outlet />
              </div>
            </CustomTabPanel>
          );
        })}
      </div>
    </div>
  );
}

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

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function TourneyApp(props) {
  if (!props.playerId) {
    return (
      <Typography variant="h2">
        No player Id given. This is a programming error
      </Typography>
    );
  }
  if (!props.tournamentId) {
    return (
      <Typography variant="h2">
        No tournament Id given. This is a programming error
      </Typography>
    );
  }
  return <ScheduleScoreCard {...props} />;
}

function TourneyView(props) {
  const { playerId, tournamentId } = useOutletContext();

  return (
    <>
      <Typography variant="h2">Scorecards</Typography>
      <TourneyApp playerId={playerId} tournamentId={tournamentId} />
    </>
  );
}

export default TourneyView;
