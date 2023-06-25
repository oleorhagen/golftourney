import React from "react";

import { Avatar, Paper, Stack, Typography, Skeleton } from "@mui/material";

const players = [
  {
    name: "Ole Petter Orhagen",
    hcp: 20,
    sex: "male",
    bio: "Ole Petter is the host of the Skjeberg Invitational (formerly Skjeberg Open), and an avid recreational golfer.",
  },
  {
    name: "Ole Martin Hellerud",
    hcp: 29,
    sex: "male",
    bio: "Ole Martin was the first winner of the Skjeberg open, and..",
  },

  {
    name: "Marius Sollie",
    hcp: 20.1,
    sex: "male",
    bio: "Marius is the reigning and defending champion at this years Skjeberg Invitational",
  },

  {
    name: "Juliane S. Karling",
    hcp: 20.1,
    sex: "female",
    bio: "Juliane is the challenger, and runner up from last years Skjeberg invitational",
  },
];

const Player = (props) => {
  return props.name ? (
    <Paper>
      <Avatar alt={props.name} src="/static/images/avatar/logo512.png" />
      <Typography variant="h4" color="text.primary" align="left">
        Name: {props.name}
      </Typography>
      <Typography variant="h4" color="text.primary" align="center">
        Hcp: {props.hcp}
      </Typography>
      <Typography variant="h4" color="text.primary" align="right">
        sex: {props.sex}
      </Typography>
      <Typography variant="body1" color="text.tertiary">
        bio: {props.bio}
      </Typography>
    </Paper>
  ) : (
    <>
      <Typography variant="h3" color="text.secondary" align="center">
        {" "}
        {props.name}
      </Typography>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />{" "}
    </>
  );
};

// TODO - Get the players info from the DB
const PlayersView = () => {
  return (
    <>
      <Typography variant="h1" color="text.primary" align="center">
        {" "}
        Players
      </Typography>
      <Stack
        direction="column"
        alignItems="center"
        marginTop={4}
        marginBottom={8}
        spacing={4}
      >
        {players.map((n, i) => (
          <Player key={i} {...n} />
        ))}
      </Stack>
    </>
  );
};

export default PlayersView;
