import React, { useState } from "react";

import {
  TextField,
  InputLabel,
  MenuItem,
  Typography,
  Select,
  FormControl,
  Paper,
} from "@mui/material";

const acceptableInput = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PlayerStats(props) {
  const [hcp, setHcp] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="player-state">
      <Paper>
        <Typography>Player ID: {props.id} </Typography>
        <Typography>Player HCP: {props.id} </Typography>
        <TextField
          id="outlined-controlled-hcp-select"
          error={error}
          label="Current Handicap"
          value={hcp}
          onChange={(event) => {
            if (isNaN(Number(event.target.value))) {
              setError(true);
              return;
            }
            const inputHcp = Number(event.target.value);
            if (!(inputHcp >= 0 && inputHcp <= 54)) {
              setError(true);
              return;
            }
            setError(false);
            setHcp(event.target.value);
          }}
        />
      </Paper>
    </div>
  );
}
