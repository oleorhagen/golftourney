import React from "react";

import { Container, Grid, Stack } from "@mui/material";
import { Paper, Typography, TextField, MenuItem } from "@mui/material";

import NumberBox from "./NumberBox";

const allowed_scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ScoreField = (props) => {
  const [score, setScore] = React.useState("");

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  const cardHeaders = ["Hole", "Par", "Hcp", "Length", "Extra"];

  // TODO - Add Hole Par
  // Handicap strokes awarded
  // Pretty boxes for every entity
  // Points obtained on dis hole (!)
  return (
    <>
      <Paper elevation={2}>
        <Stack direction="row" justifyContent="center" spacing={4}>
          {cardHeaders.map((header) => (
            <Typography variant="subtitle1" component="div">
              {header}:
            </Typography>
          ))}
        </Stack>
      </Paper>
      <Paper elevation={3}>
        <Stack direction="row" justifyContent="center" spacing={4}>
          <NumberBox text={props.hole} />
          <NumberBox text="Par" />
          <NumberBox text="Hcp" />
          <TextField
            id="outlined-select-score"
            select
            label="Score"
            value={score}
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
    </>
  );
};

export default ScoreField;
