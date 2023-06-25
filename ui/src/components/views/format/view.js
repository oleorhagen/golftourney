import React from "react";

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const formatText = `Skjeberg Invitational is a four day tournament, consisting of four contestants, and two days of individual play, as well as two days of team play. The tournament will be held over the following courses: `;

const matchPlayText = `The matchplay will be done with the following quirks. The average of the team members handicaps subtracted 20%. No one player can have three or more tee-strokes in a row, and hence the team will have to use their tee-shots carefully. One hole will have to be played with the worst ball.`;

const individualFormatText = `The individual games will have each member have the opportunity for one mulligan a day. It is also possible to save the mulligan for the next day of individual play`;

const courses = [
  {
    day: 1,
    course: "Gamle Fredrikstad",
    type: "teams",
    competition: "irons",
  },
  {
    day: 2,
    course: "Borregaard",
    type: "single",
    competition: "putting",
  },
  {
    day: 3,
    course: "Skjeberg",
    type: "teams",
    teams: "1st place and 3rd place. 2nd place and 4th place.",
    competition: "chipping",
  },
  {
    day: 4,
    course: "Onsoy",
    type: "single",
    competition: "driving",
  },
];

const FormatView = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper>
          <Typography variant="h4" align="left" color="text.primary">
            Format:
          </Typography>
          <Typography
            variant="body1"
            align="left"
            mt={2}
            color="text.secondary"
          >
            {formatText}
          </Typography>
          <List>
            {courses.map((c, i) => {
              return (
                <ListItem key={i}>
                  <ListItemText
                    inset={true}
                    secondary={c.type}
                    primary={
                      <Typography color="text.tertiary">
                        Day {c.day}: {c.course}
                        {c.type === "teams" && c.teams && "(" + c.teams + ")"}
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
              );
            })}
          </List>
          <Typography variant="body1" align="left" color="text.secondary">
            {matchPlayText}
          </Typography>
          <Typography variant="body1" align="left" color="text.secondary">
            {individualFormatText}
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default FormatView;
