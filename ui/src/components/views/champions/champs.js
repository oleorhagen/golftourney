import React from "react";

import "./champs.css";

import { Paper, Typography } from "@mui/material";

export const PreviousChampion = (props) => {
  return (
    <Paper elevation={3}>
      <Typography gutterBottom variant="h1" component="div" align="center">
        {props.name}
      </Typography>
      <figure>
        <img
          src={props.img}
          alt="2021 champion"
          title={props.text}
          width="80%"
        />
        <figcaption>{props.text}</figcaption>
      </figure>
    </Paper>
  );
};

export default PreviousChampion;
