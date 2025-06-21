import React from "react";

import { useOutletContext } from "react-router-dom";

import {
  Avatar,
  Box,
  Paper,
  Stack,
  Typography,
  Skeleton,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid
} from "@mui/material";
import { styled } from "@mui/material/styles";

const PlayersContainer = styled(Box)(({ theme }) => ({
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

const PlayerCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  background: '#ffffff',
  border: '2px solid #2e7d32',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(46, 125, 50, 0.15)',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(46, 125, 50, 0.25)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: 'linear-gradient(45deg, #2e7d32, #4caf50, #2e7d32)',
    borderRadius: 16,
    zIndex: -1,
  },
}));

const PlayerAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: '4px solid #ffffff',
  boxShadow: '0 4px 16px rgba(46, 125, 50, 0.3)',
  margin: theme.spacing(2, 'auto'),
}));

const HandicapChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: theme.spacing(1, 2),
  '& .MuiChip-label': {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));

const GenderChip = styled(Chip)(({ theme, gender }) => ({
  background: gender === 'male'
    ? 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
    : 'linear-gradient(135deg, #e91e63 0%, #c2185b 100%)',
  color: 'white',
  fontWeight: 600,
}));

const PlayerName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: 'bold',
  color: '#2e7d32',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
  letterSpacing: '0.5px',
}));

const PlayerBio = styled(Typography)(({ theme }) => ({
  color: '#666666',
  lineHeight: 1.6,
  fontStyle: 'italic',
  textAlign: 'center',
  padding: theme.spacing(0, 2),
}));

const StatsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const players = [
  {
    name: "Ole Petter Orhagen",
    hcp: 20,
    sex: "male",
    bio: "Ole Petter is the host of the Skjeberg Invitational (formerly Skjeberg Open), and an avid recreational golfer.",
    avatarImg: "/static/images/avatar/626fa9fd-95ed-40e8-90f3-139ec79e79b9.jpg",
  },
  {
    name: "Ole Martin Hellerud",
    hcp: 29,
    sex: "male",
    bio: "Ole Martin was the first winner of the Skjeberg open, and..",
    avatarImg: "/static/images/avatar/47e28a8a-8aab-4f5d-a4b4-3c2151514ba6.jpg",
  },

  {
    name: "Marius Sollie",
    hcp: 38,
    sex: "male",
    bio: "Marius is the reigning and defending champion at this years Skjeberg Invitational",
    avatarImg: "/static/images/avatar/9a771ff0-a6f6-462d-b66a-0e2f66ffb21b.jpg",
  },

  {
    name: "Juliane S. Karling",
    hcp: 21.4,
    sex: "female",
    bio: "Kjempe smellvakker prinsesse beauty queen <3",
    avatarImg: "/static/images/avatar/a892ead4-9d58-4e0f-8111-ce17b2f364e4.jpg",
  },
];

const Player = (props) => {
  return props.name ? (
    <PlayerCard>
      <CardContent sx={{ padding: 3 }}>
        <PlayerAvatar alt={props.name} src={props.avatarImg} />

        <PlayerName variant="h4">
          {props.name}
        </PlayerName>

        <StatsBox>
          <HandicapChip
            label={`HCP ${props.hcp}`}
            size="medium"
          />
          <GenderChip
            label={props.sex === 'male' ? 'Male' : 'Female'}
            gender={props.sex}
            size="medium"
          />
        </StatsBox>

        <Divider sx={{
          margin: '16px 0',
          backgroundColor: '#e8f5e8',
          height: 2
        }} />

        <PlayerBio variant="body1">
          {props.bio}
        </PlayerBio>
      </CardContent>
    </PlayerCard>
  ) : (
    <PlayerCard>
      <CardContent sx={{ padding: 3, textAlign: 'center' }}>
        <Skeleton variant="circular" width={120} height={120} sx={{ margin: '16px auto' }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem", margin: '8px auto', width: '60%' }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, margin: '16px 0' }}>
          <Skeleton variant="rounded" width={80} height={32} />
          <Skeleton variant="rounded" width={80} height={32} />
        </Box>
        <Skeleton variant="text" sx={{ fontSize: "1rem", margin: '8px auto' }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", margin: '8px auto', width: '80%' }} />
      </CardContent>
    </PlayerCard>
  );
};

// TODO - Get the players info from the DB
const PlayersView = () => {
  const { playerId } = useOutletContext();

  return (
    <PlayersContainer>
      <TournamentHeader>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white'
          }}
        >
          Tournament Players
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontWeight: 400,
            color: 'white'
          }}
        >
          Meet the competitors of the Skjeberg Invitational
        </Typography>
      </TournamentHeader>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1200, margin: '0 auto' }}
      >
        {players.map((player, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Player {...player} />
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
          "A tradition of excellence on the green"
        </Typography>
      </Box>
    </PlayersContainer>
  );
};

export default PlayersView;
