import React from "react";

import { Container, Grid } from "@mui/material";
import PreviousChampion from "./champs";

import champImg22 from "./champs/champ22.jpg";
import champImg21 from "./champs/champ21.jpg";

export const Champions = () => {
  const previousChamps = [
    {
      name: "Maarjus",
      img: champImg22,
      text: "The winner of the 2022 Skjeberg Invitational",
    },
    {
      name: "Ole M.",
      img: champImg21,
      text: "The winner of the 2021 Skjeberg Open",
    },
  ];

  return (
    <>
      <Container maxWidth="sm">
        <h1>Champions</h1>
        <div id="champ-root">
          <Grid container spacing={2}>
            {previousChamps.map((champ) => (
              <Grid key={champ.name} item>
                <PreviousChampion
                  name={champ.name}
                  img={champ.img}
                  text={champ.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Champions;
