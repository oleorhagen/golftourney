import React from "react";

import "./champs.css";

import { Paper, Typography } from "@mui/material";

export const PreviousChampion = (props) => {
  // TODO - Layout should be a grid with champs
  // The latest champion should wear a crown
  // Every champion should have an img (this I have for both years)
  // And the name is shining lights
  // Johnny b good' to'nite
  // Arrow pointing to the latest champ, saying: `This Is the Champ!!!`

  //
  // TODO - How does HTML img automatically choose the png size ? I don't remember
  // https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images - Look at responsive images here
  //

  // TODO - Generate multiple formats of the images used, the one currently is too big!
  return (
    <Paper elevation={3}>
      <Typography gutterBottom variant="h1" component="div" align="center">
        {props.name}
      </Typography>
      <figure>
        <img
          src={props.img}
          alt="2021 champion"
          title="Winner of the 2022 Skjeberg Invitational"
          width="80%"
        />
        <figcaption>The winner of the 2022 Skjeberg Invitiational</figcaption>
      </figure>
    </Paper>
  );
};

export default PreviousChampion;
