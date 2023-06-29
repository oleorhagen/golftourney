import React from "react";

import { useOutletContext } from "react-router-dom";

import { Avatar, Paper, Stack, Typography, Skeleton } from "@mui/material";

const players = [
  {
    name: "Ole Petter Orhagen",
    hcp: 20,
    sex: "male",
    bio: "Ole Petter is the host of the Skjeberg Invitational (formerly Skjeberg Open), and an avid recreational golfer.",
    avatarImg: "/static/images/avatar/626fa9fd-95ed-40e8-90f3-139ec79e79b9.jpg",
  },
  {
    name: "Ole Martin Hellerud",
    hcp: 29,
    sex: "male",
    bio: "Ole Martin was the first winner of the Skjeberg open, and..",
    avatarImg: "/static/images/avatar/47e28a8a-8aab-4f5d-a4b4-3c2151514ba6.jpg",
  },

  {
    name: "Marius Sollie",
    hcp: 20.1,
    sex: "male",
    bio: "Marius is the reigning and defending champion at this years Skjeberg Invitational",
    avatarImg: "/static/images/avatar/9a771ff0-a6f6-462d-b66a-0e2f66ffb21b.jpg",
  },

  {
    name: "Juliane S. Karling",
    hcp: 20.1,
    sex: "female",
    bio: "Kjempe smellvakker prinsesse beauty queen <3",
    avatarImg: "/static/images/avatar/a892ead4-9d58-4e0f-8111-ce17b2f364e4.jpg",
  },
];

const Player = (props) => {
  return props.name ? (
    <Paper>
      <Avatar alt={props.name} src={props.avatarImg} />
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
  const [playerId] = useOutletContext();
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
