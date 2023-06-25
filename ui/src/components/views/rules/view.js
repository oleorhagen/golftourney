import React from "react";

import { Container, Typography, Paper } from "@mui/material";

const RulesView = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper>
          <Typography variant="h4">Rules:</Typography>
          <Typography variant="h5" align="left">
            Course Rules:
          </Typography>
          <Typography variant="p" align="left">
            The on course rules follow the regular rules of Golf, with the
            following additions/exceptions
            <ul>
              <li>One mulligan available for each day of individual play</li>
              <li>The mulligan can be carried over to the next day</li>
              <li>
                The tournament host has the final say in disputes regarding the
                rules
              </li>
            </ul>
          </Typography>
          <Typography variant="h5" align="left">
            Cabin Rules:
          </Typography>
          <Typography variant="p" align="left">
            <ul>
              <li>On sunday we all wear red</li>
              <li>
                The master bedroom is at the reigning champion's disposal.
              </li>
              <li>You are allowed 15 clubs</li>
            </ul>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default RulesView;
