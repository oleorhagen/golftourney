import React from "react";

import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";


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

const FormatView = () => {
  return (
    <>
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
    </>
  );
};

export default FormatView;
