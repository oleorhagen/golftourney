import React, { useState } from "react";
import graphql from "babel-plugin-relay/macro";

import { useOutletContext, Outlet } from "react-router-dom";
import Link from "../../router/Link";

import { Box, Tab, Tabs, Typography } from "@mui/material";

// import PlayerStats from "./playerstats/PlayerStats";
import ScoreCard from "./scorecard/ScoreCard";

import { loadQuery, useLazyLoadQuery } from "react-relay/hooks";

const ListAllScorecardsQuery = graphql`
  query viewListScorecardsQuery($tournamentId: ID!, $playerId: ID!) {
    scorecards(
      condition: { tournamentId: $tournamentId, playerId: $playerId }
    ) {
      id
      tournament_id
      handicap
      course_name
      player {
        id
        name
        handicap
      }
    }
  }
`;

export function RouterScoreCard() {
  const props = useOutletContext();
  return <ScoreCard {...props} />;
}

function ScheduleScoreCard(props) {
  const [value, setValue] = useState(0);
  const [hcp, setHcp] = useState(0);

  const data = useLazyLoadQuery(
    ListAllScorecardsQuery,
    { tournamentId: props.tournamentId, playerId: props.scorerId },
    { fetchPolicy: "network-only" },
  );

  var courseNodes = data?.scorecards || [];

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
                  n.course_name.replace(/\W+/g, "-").toLowerCase()
                }
                label={n.course_name}
                key={i}
              />
            ))}
          </Tabs>
        </Box>
        {courseNodes.map((courseNode, i) => {
          return (
            <CustomTabPanel value={value} index={i} key={i}>
              <div>
                <Outlet
                  context={{
                    courseName: courseNode.course_name,
                    scorecardId: courseNode.id,
                    ...props,
                  }}
                />
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

function TourneyView(props) {
  const { playerId, tournamentId } = useOutletContext();

  return (
    <>
      <Typography variant="h2">Scorecards</Typography>
      <ScheduleScoreCard scorerId={playerId} tournamentId={tournamentId} />
    </>
  );
}

export default TourneyView;
