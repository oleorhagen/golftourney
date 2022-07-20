import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Button";

export default function NumberBox(props) {
  return (
    <Box
      component="span"
      sx={{ p: 2, border: "1px solid black", borderRadius: "10px" }}
    >
      <Typography variant="h1">{props.text}</Typography>
    </Box>
  );
}
