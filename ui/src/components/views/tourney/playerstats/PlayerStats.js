import React, { useState } from "react";

import { TextField, Typography, Paper } from "@mui/material";

export default function PlayerStats(props) {
  const [hcp, setHcp] = useState(localStorage.getItem(props.playerId));
  const [error, setError] = useState(false);

  return (
    <div className="player-state">
      <Paper>
        <Typography>Player ID: {props.id} </Typography>
        <Typography>Player HCP: {props.id} </Typography>
        <TextField
          id="outlined-controlled-hcp-select"
          error={error}
          label="Extra Strokes on the Course"
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
            props.onChange(event.target.value);
          }}
        />
      </Paper>
    </div>
  );
}
