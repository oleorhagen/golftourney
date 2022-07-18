import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

const allowed_scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ScoreField = (props) => {
  const [score, setScore] = React.useState();

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <Paper>
      <Stack direction="row">
        <Typography variant="subtitle1" component="div" align="center">
          {props.hole}
        </Typography>
        <TextField
          id="outlined-select-currency"
          select
          label="Score"
          value={allowed_scores}
          onChange={handleChange}
          helperText="Please select your score"
        >
          {allowed_scores.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </Paper>
  );
};

export default ScoreField;
