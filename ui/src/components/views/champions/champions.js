import React from "react";

import { Container, Grid } from "@mui/material";
import PreviousChampion from "./champs";

import champImg22 from "./champs/champ22.jpg";
import champImg21 from "./champs/champ21.jpg";

export const Champions = () => {
  const previousChamps = [
    { name: "Maarjus", img: champImg22 },
    { name: "Ole M.", img: champImg21 },
  ];

  return (
    <>
      <h1>Champions</h1>
      <div id="champ-root">
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            {previousChamps.map((champ) => (
              <Grid key={champ.name} item>
                <PreviousChampion name={champ.name} img={champ.img} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Champions;
