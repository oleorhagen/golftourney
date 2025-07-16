import React, { useState } from "react";
import graphql from "babel-plugin-relay/macro";

import { useParams, useOutletContext } from "react-router-dom";
import Link from "../../router/Link";

import { Box, Tab, Tabs, Typography, Card, CardContent } from "@mui/material";
import { useLazyLoadQuery } from "react-relay/hooks";

const TournamentDetailQuery = graphql`
  query detailTournamentDetailQuery($tournamentId: ID!, $playerId: ID!) {
    tournaments(condition: { id: $tournamentId }) {
      id
      name
      year
    }
    scorecards(
      condition: { tournamentId: $tournamentId, playerId: $playerId }
      orderBy: CREATED_AT_DESC
    ) {
      id
      handicap
      created_at
      course {
        name
        nr_holes
        slope
        course_rating
      }
      player {
        id
        name
        handicap
      }
    }
  }
`;

function TournamentDetail() {
  const { tournamentId } = useParams();
  const { playerId } = useOutletContext();
  const [value, setValue] = useState(0);

  const data = useLazyLoadQuery(
    TournamentDetailQuery,
    { tournamentId, playerId },
    { fetchPolicy: "network-only" },
  );

  const tournament = data?.tournaments?.[0];
  const scorecards = data?.scorecards || [];

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!tournament) {
    return <Typography variant="h4">Tournament not found</Typography>;
  }

  return (
    <div className="TourneyApp">
      <Typography variant="h2" sx={{ mb: 3 }}>
        {tournament.name} ({new Date(tournament.year).getFullYear()})
      </Typography>

      <Typography variant="h4" sx={{ mb: 2 }}>
        Scorecards ({scorecards.length})
      </Typography>

      <div className="TourneyApp-header">
        <Box sx={{ width: "100%", bgcolor: "background.paper", mb: 2 }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            variant="fullWidth"
            orientation="vertical"
          >
            {scorecards.map((scorecard, i) => (
              <Tab
                component={Link}
                to={`/scorecards/${scorecard.course.name.replace(/\W+/g, "-").toLowerCase()}`}
                label={
                  <Card sx={{ width: "100%", textAlign: "left" }}>
                    <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                      <Typography variant="h6" component="div">
                        {scorecard.player.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Course: {scorecard.course.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Player Handicap: {scorecard.player.handicap} | Scorecard Handicap: {scorecard.handicap}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {scorecard.created_at ?
                          (() => {
                            const date = new Date(scorecard.created_at);
                            return isNaN(date.getTime()) ?
                              `Created: ${scorecard.created_at}` :
                              `Created: ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                          })()
                          : 'No date'
                        }
                      </Typography>
                    </CardContent>
                  </Card>
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

export default TournamentDetail;
