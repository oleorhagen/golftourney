import React, { useState } from "react";

import { useOutletContext } from "react-router-dom";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import graphql from "babel-plugin-relay/macro";

import {
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
} from "react-relay/hooks";

// import PlacementSelection from "./PlacementSelection";

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
  query viewListAllTournamentsQuery {
    tournaments {
      id
      name
      year
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
  const competition_data = useLazyLoadQuery(competitionsQuery, {
    playerId: props.playerId,
  });

  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  if (competition_data.tournaments.length > 0) {
    return (
      <div className="CompetitionApp">
        <div className="CompetitionApp-header">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleTabChange} centered>
              {competition_data.tournaments.map((n, i) => (
                <Tab label={n.competitionType} key={i} />
              ))}
            </Tabs>
          </Box>
          {competition_data.tournaments.map((n, i) => {
            return (
              <CustomTabPanel value={value} index={i} key={i}>
                <div>{n.competitionType}</div>
                  {n.name}---
                  {n.year}
                {/* <PlacementSelection */}
                {/*   playerId={props.playerId} */}
                {/*   competitionId={n.id} */}
                {/*   nodeId={n.competitionScoresByCompetitionId.nodes[0]?.id} */}
                {/*   points={n.competitionScoresByCompetitionId.nodes[0]?.points} */}
                {/* /> */}
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
  const { playerId } = useOutletContext();

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2" type="secondary">
          Competitions
        </Typography>
        <CompetitionApp playerId={playerId} />
      </Container>
    </>
  );
}

export default CompetitionView;
