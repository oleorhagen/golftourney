import React from "react";

import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const courses = [
  {
    day: 1,
    course: "Borregaard",
    type: "single",
  },
  {
    day: 2,
    course: "Gamle Fredrikstad",
    type: "single",
  },
  {
    day: 3,
    course: "Skjeberg",
    type: "single",
  },
  {
    day: 4,
    course: "Onsoy",
    type: "single",
  },
];

const MainView = () => {
  return (
    <>
      <Typography variant="h3" color="text.primary" align="center">
        {" "}
        Welcome to Skjeberg Invitational {new Date().getFullYear()}
      </Typography>
      <FlipClockCountdown to={new Date("2023-06-29T10:00:00")} />
      <Paper>
        <Typography variant="h4">Format:</Typography>
        <Typography variant="p">
          Skjeberg Invitational is a four day tournament hosted at the given
          courses:
        </Typography>
        <ul>
          {courses.map((n, i) => (
            <li>
              {n.course} on day {n.day}
            </li>
          ))}
        </ul>
      </Paper>
      <Paper>
        <Typography variant="h4">Rules:</Typography>
        <Typography variant="p">
          Regular rules of Golf, with the following additions
        </Typography>
        <ul>
          {courses.map((n, i) => (
            <li>
              {n.course} on day {n.day}
            </li>
          ))}
        </ul>
      </Paper>
    </>
  );
};

export default MainView;
