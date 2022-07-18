import React from "react";

import { Stack, Typography } from "@mui/material";

export const Footer = () => (
  <Stack
    direction="row"
    alignItems="center"
    marginTop={4}
    marginBottom={8}
    justifyContent="space-between"
  >
    <div />
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © {" Skjeberg Inv."} {new Date().getFullYear()}.
    </Typography>
    <Stack direction="row" alignItems="center" spacing={2}></Stack>
  </Stack>
);

export default Footer;
