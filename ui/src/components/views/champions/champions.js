import React from "react";

import { Container, Grid } from "@mui/material";
import PreviousChampion from "./champs";

import champImg22 from "./champs/champ22.jpg";
import champImg21 from "./champs/champ21.jpg";

export const Champions = () => {
  const previousChamps = [
    {
      name: "Marius Sollie",
      img: champImg22,
      text: "The winner of the 2022 Skjeberg Invitational",
      avatarName: "MS",
      bgColor: "red",
      date: "July 02, 2022",
      short: "Iceman",
      story:
        "After an impressive show of keeping his cool, and the nerves in check, Marius came out on top of the 2022 Skjeberg Invitational. Being chased down the final leg by the venerable Juliane Karling, Marius was never really in trouble, and after making it over the water on 17, and his opponents getting into some trouble, Marius could enjoy the walk down 18th at Skjeberg. Congratulations!",
    },
    {
      name: "Ole M. Hellerud",
      img: champImg21,
      text: "The winner of the 2021 Skjeberg Open",
      avatarName: "OH",
      bgColor: "blue",
      date: "July 02, 2021",
      short: "McLane?",
      story:
        "Being chased down the final day at the final boss (Skjeberg), Ole M., kept his opponents at bay, and became the first (original) winner of the Skjeberg (then Open).",
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
                <PreviousChampion {...champ} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Champions;
