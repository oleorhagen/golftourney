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

const StatsView = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={2}>
          <Typography variant="h4" color="text.primary" align="left">
          Stats:
          </Typography>
          <Typography variant="h5" align="left" color="text.secondary" mt={2}>
          Singles:
          </Typography>
          <List>
            {onCourseRulesText.map((rule, i) => (
              <ListItem key={i}>
                <ListItemText inset={true} primary={rule} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </>
  );
};

export default StatsView;
