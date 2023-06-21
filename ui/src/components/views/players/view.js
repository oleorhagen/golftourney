import React from "react";

import { Stack, Typography, Skeleton } from "@mui/material";

const Player = (props) => {
  return (
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
        {["Ole Petter", "Ole Martin", "Julius", "Marius"].map((n, i) => (
          <Player key={i} name={n} />
        ))}
      </Stack>
    </>
  );
};

export default PlayersView;
