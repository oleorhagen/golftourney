import React from "react";

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const onCourseRulesText = [
  "One mulligan available for each day of individual play",
  "The mulligan can be carried over to the next day",
  "The tournament host has the final say in disputes regarding the rules",
  "You are allowed 15 clubs",
];

const inCabinRulesText = [
  "On sunday we all wear red",
  "The master bedroom is at the reigning champion's disposal",
  "The Champions dinner is on saturday, where the Champion decides the menu, and only champions are welcome",
];

const RulesView = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper>
          <Typography variant="h4" color="text.primary" align="left">
            Rules:
          </Typography>
          <Typography variant="h5" align="left" color="text.secondary" mt={2}>
            Course Rules:
          </Typography>
          <Typography variant="body1" align="left" color="text.tertiary" mt={2}>
            The on course rules follow the regular rules of Golf, with the
            following additions/exceptions
          </Typography>
          <List>
            {onCourseRulesText.map((rule, i) => (
              <ListItem key={i}>
                <ListItemText inset={true} primary={rule} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h5" align="left" color="text.secondary">
            Cabin Rules:
          </Typography>
          <Typography variant="body1" align="left">
            <List>
              {inCabinRulesText.map((rule, i) => (
                <ListItem>
                  <ListItemText inset={true} primary={rule} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default RulesView;
