import React, { useState } from "react";

import { Box, Tab, Tabs, Typography } from "@mui/material";

import RelayEnvironment from "../../../RelayEnvironment";

import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";

import {
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
} from "react-relay/hooks";

import PlacementSelection from "./PlacementSelection";

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

const competitionsQuery = graphql`
  query viewCompetitionsQuery($playerId: UUID!) {
    allCompetitions {
      nodes {
        competitionType
        id
        nodeId
        competitionScoresByCompetitionId(condition: { playerId: $playerId }) {
          nodes {
            competitionId
            id
            nodeId
            points
            playerId
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
function CompetitionApp(props) {
  // const [commitMutation, { createdData, isMutationInFlight }] = useMutation(
  //   viewSetHandicapForCourseMutation
  // );
  const competition_data = useLazyLoadQuery(competitionsQuery, {
    playerId: props.playerId,
  });
  console.log("competition data:");
  console.log(competition_data);

  var competition_nodes = [];

  {
    const {
      allCompetitions: { nodes },
    } = competition_data;
    competition_nodes = nodes;
  }

  console.log("competition nodes:");
  console.log(competition_nodes);

  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    console.log("Handle tab change");
    console.log(event);
    setValue(newValue);
  };

  if (competition_nodes.length > 0) {
    return (
      <div className="CompetitionApp">
        <div className="CompetitionApp-header">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleTabChange} centered>
              {competition_nodes.map((n, i) => (
                <Tab label={n.competitionType} key={i} />
              ))}
            </Tabs>
          </Box>
          {competition_nodes.map((n, i) => {
            console.log(`n node: ${n}`);
            console.log(n.nodeId);
            console.log(n.id);
            return (
              <CustomTabPanel value={value} index={i} key={i}>
                <div>{n.competitionType}</div>
                <PlacementSelection
                  playerId={props.playerId}
                  competitionId={n.id}
                  nodeId={n.competitionScoresByCompetitionId.nodes[0]?.id}
                  points={n.competitionScoresByCompetitionId.nodes[0]?.points}
                />
              </CustomTabPanel>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="CompetitionApp">
      <header className="CompetitionApp-header">
        <p>No data present...</p>
      </header>
    </div>
  );
}

function CompetitionView(props) {
  console.log("tourney View");
  console.log(props);

  return (
    <>
      <h1>Competition</h1>
      <CompetitionApp playerId={"626fa9fd-95ed-40e8-90f3-139ec79e79b9"} />
    </>
  );
}

export default CompetitionView;
