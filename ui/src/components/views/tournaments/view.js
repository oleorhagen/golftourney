import React, { useState } from "react";
import graphql from "babel-plugin-relay/macro";

import { useOutletContext } from "react-router-dom";
import Link from "../../router/Link";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLazyLoadQuery } from "react-relay/hooks";

const ListAllTournamentsQuery = graphql`
  query viewListTournamentsQuery {
    tournaments(
      orderBy: YEAR_DESC
    ) {
      id
      name
      year
    }
  }
`;

function TournamentsList() {
  const [value, setValue] = useState(0);

  const data = useLazyLoadQuery(
    ListAllTournamentsQuery,
    {},
    { fetchPolicy: "network-only" },
  );

  var tournamentNodes = data?.tournaments || [];

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="TourneyApp">
      <div className="TourneyApp-header">
        <Box sx={{ width: "100%", bgcolor: "background.paper", mb: 2 }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            variant="fullWidth"
            orientation="vertical"
          >
            {tournamentNodes.map((tournament, i) => (
              <Tab
                component={Link}
                to={`/tournaments/${tournament.id}`}
                label={
                  <div>
                    <div>{tournament.name}</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                      {new Date(tournament.year).getFullYear()}
                    </div>
                  </div>
                }
                key={i}
              />
            ))}
          </Tabs>
        </Box>
      </div>
    </div>
  );
}

function TournamentsView() {
  return (
    <>
      <Typography variant="h2">Tournaments</Typography>
      <TournamentsList />
    </>
  );
}

export default TournamentsView;