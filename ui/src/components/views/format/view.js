import React from "react";

import { Container, Typography, Paper } from "@mui/material";

const formatText = `Skjeberg Invitational is a four day tournament, consisting of four contestants, and two days of individual play, as well as two days of team play. The tournament will be held over the following courses: `;

const matchPlayText = `The matchplay will be done with the following quirks. The average of the team members handicaps subtracted 20%.`;

const individualFormatText = `The individual games will have each member have the opportunity for one mulligan a day. It is also possible to save the mulligan for the next day of individual play`;

const courses = [
  {
    day: 1,
    course: "Gamle Fredrikstad",
    type: "match",
    teams: "Ole M. And Juliane. Marius and Ole P.",
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
    type: "match",
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
          <Typography variant="h4">Format:</Typography>
          <Typography variant="p" align="left">
            {formatText}
            <ul>
              {courses.map((n, i) => (
                <li key={i}>
                  {n.type === "match" && (
                    <span style={{ fontWeight: "bold" }}>Teams: </span>
                  )}
                  {n.course} on day {n.day}.{" "}
                  {n.type === "match" && "(" + n.teams + ")"}
                  <ul>
                    <li>
                      The days competition:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {n.competition}
                      </span>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </Typography>
          <Typography variant="p" align="left">
            {matchPlayText}
          </Typography>
          <Typography variant="p" align="left">
            {individualFormatText}
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default FormatView;
