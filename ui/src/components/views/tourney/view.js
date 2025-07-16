import React, { useState } from "react";
import graphql from "babel-plugin-relay/macro";

import { useOutletContext, Outlet } from "react-router-dom";
import Link from "../../router/Link";

import { Box, Tab, Tabs, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem } from "@mui/material";
import { useMutation } from "react-relay/hooks";

// import PlayerStats from "./playerstats/PlayerStats";
import ScoreCard from "./scorecard/ScoreCard";
import { SelectScoreAutoWidthFragment } from "./scorecard/SelectScoreAutoWidth";

import { loadQuery, useLazyLoadQuery } from "react-relay/hooks";

const ListAllScorecardsQuery = graphql`
  query viewListScorecardsQuery($tournamentId: ID!, $playerId: ID!) {
    scorecards(
      condition: { tournamentId: $tournamentId, playerId: $playerId }
    ) {
      id
      tournament_id
      handicap
      course {
        name
        nr_holes
        slope
        course_rating
        holes {
          nr
          index
          par
          extra_strokes
          strokes
          points
          ...SelectScoreAutoWidthFragment
        }
      }
      player {
        id
        name
        handicap
      }
    }
    courses {
      name
    }
  }
`;

const CreateScorecardMutation = graphql`
  mutation viewCreateScorecardMutation($input: NewScorecard!) {
    createScorecard(input: $input) {
      id
      tournament_id
      handicap
      course {
        name
        nr_holes
        slope
        course_rating
        holes {
          nr
          index
          par
          extra_strokes
          strokes
          points
          ...SelectScoreAutoWidthFragment
        }
      }
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [handicap, setHandicap] = useState("");
  const [queryKey, setQueryKey] = useState(0);

  const data = useLazyLoadQuery(
    ListAllScorecardsQuery,
    { tournamentId: props.tournamentId, playerId: props.scorerId },
    { fetchPolicy: "network-only", fetchKey: queryKey },
  );

  const [createScorecard] = useMutation(CreateScorecardMutation);

  var courseNodes = data?.scorecards || [];
  var availableCourses = data?.courses || [];

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCreateScorecard = () => {
    createScorecard({
      variables: {
        input: {
          tournament_id: props.tournamentId,
          player_id: props.scorerId,
          course_name: courseName,
          handicap: parseInt(handicap)
        }
      },
      onCompleted: (response) => {
        setDialogOpen(false);
        setCourseName("");
        setHandicap("");
        setQueryKey(prev => prev + 1);
      },
      onError: (error) => {
        console.error('Error creating scorecard:', error);
      }
    });
  };

  return (
    <div className="TourneyApp">
      <div className="TourneyApp-header">
        <Box sx={{ width: "100%", bgcolor: "background.paper", mb: 2 }}>
          <Button
            variant="contained"
            onClick={() => setDialogOpen(true)}
            sx={{ mb: 2 }}
          >
            Create New Scorecard
          </Button>
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
                  n.course.name.replace(/\W+/g, "-").toLowerCase()
                }
                label={n.course.name}
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
                    ...courseNode,
                    ...props,
                  }}
                />
              </div>
            </CustomTabPanel>
          );
        })}

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Create New Scorecard</DialogTitle>
          <DialogContent>
            <TextField
              select
              label="Course"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              fullWidth
              margin="normal"
            >
              {availableCourses.map((course) => (
                <MenuItem key={course.name} value={course.name}>
                  {course.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Handicap"
              type="number"
              value={handicap}
              onChange={(e) => setHandicap(e.target.value)}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={handleCreateScorecard}
              variant="contained"
              disabled={!courseName || !handicap}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
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
