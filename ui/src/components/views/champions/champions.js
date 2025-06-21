import React from "react";

import {
  Container,
  Grid,
  Typography,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PreviousChampion from "./champs";

import champImg23 from "./champs/champ23-small.jpg";
import champImg22 from "./champs/champ22-small.jpg";
import champImg21 from "./champs/champ21-small.jpg";

const ChampionsContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)',
  minHeight: '100vh',
  padding: theme.spacing(4, 2),
}));

const TournamentHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
  borderRadius: 12,
  boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
  color: 'white',
}));

const TrophyIcon = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  marginBottom: theme.spacing(2),
  display: 'inline-block',
}));

export const Champions = () => {
  const previousChamps = [
    {
      name: "Marius Sollie",
      img: champImg23,
      text: "The winner of the 2023 Skjeberg Invitational",
      avatarName: "MS",
      bgColor: "red",
      date: "July 02, 2023",
      short: "Comeback kid?",
      story:
        "After having an inital lead of a single point going out on the final day, and after missing quite a few putts, and having quite a bad break. In fact, with three holes remaining, three competitiors. Ole P., Ole M., and Marius himself were pretty much equal. Marius was able to pull away on the final three holes, and won by a comfortable 10 points in the end. Congratulations.",
    },
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
    <ChampionsContainer>
      <TournamentHeader>
        <TrophyIcon>🏆</TrophyIcon>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white'
          }}
        >
          Tournament Champions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontWeight: 400,
            color: 'white'
          }}
        >
          Hall of Fame - Skjeberg Invitational Winners
        </Typography>
      </TournamentHeader>

      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {previousChamps.map((champ, index) => (
            <Grid
              key={`${champ.name}-${champ.date}`}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <PreviousChampion {...champ} championRank={index + 1} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: 6 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#666666',
              fontStyle: 'italic',
              fontSize: '1rem'
            }}
          >
            "Champions are made, not born"
          </Typography>
        </Box>
      </Container>
    </ChampionsContainer>
  );
};

export default Champions;
