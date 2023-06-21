import React from "react";

import { Typography, Skeleton } from "@mui/material";

const MainView = () => {
  return (
    <>
      <Typography variant="h2" color="text.primary" align="center">
        {" "}
        Welcome to Skjeberg Invitational {new Date().getFullYear()}
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

export default MainView;
