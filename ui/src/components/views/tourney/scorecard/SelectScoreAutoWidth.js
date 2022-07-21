import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const acceptableScores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SelectScoreAutoWidth() {
  const [score, setScore] = React.useState("");

  const handleChange = (event) => {
    setScore(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 40 }}>
        <InputLabel id="score-simple-select-autowidth-label">Score</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="score-simple-select-autowidth"
          value={score}
          onChange={handleChange}
          autoWidth
          label="Score"
        >
          {acceptableScores.map((score) => (
            <MenuItem key={score} value={score}>
              {score}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
