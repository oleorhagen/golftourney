import React, { useState } from "react";

import { useOutletContext } from "react-router-dom";

import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Paper,
  Avatar,
  Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";

import graphql from "babel-plugin-relay/macro";

import {
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
} from "react-relay/hooks";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";
import TrophyIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";

const CompetitionsContainer = styled(Box)(({ theme }) => ({
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

const TournamentCard = styled(Card)(({ theme, isCurrentYear }) => ({
  background: '#ffffff',
  border: isCurrentYear ? '3px solid #FFD700' : '2px solid #2e7d32',
  borderRadius: 16,
  boxShadow: isCurrentYear
    ? '0 12px 32px rgba(255, 215, 0, 0.4)'
    : '0 8px 24px rgba(46, 125, 50, 0.15)',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  position: 'relative',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: isCurrentYear
      ? '0 16px 40px rgba(255, 215, 0, 0.5)'
      : '0 12px 32px rgba(46, 125, 50, 0.25)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: isCurrentYear ? -3 : -2,
    left: isCurrentYear ? -3 : -2,
    right: isCurrentYear ? -3 : -2,
    bottom: isCurrentYear ? -3 : -2,
    background: isCurrentYear
      ? 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700)'
      : 'linear-gradient(45deg, #2e7d32, #4caf50, #2e7d32)',
    borderRadius: 16,
    zIndex: -1,
  },
}));

const TournamentCardHeader = styled(Box)(({ theme, isCurrentYear }) => ({
  background: isCurrentYear
    ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    : 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
  color: isCurrentYear ? '#8B4513' : 'white',
  padding: theme.spacing(3),
  borderRadius: '12px 12px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const TournamentTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: 'bold',
  fontSize: '1.5rem',
}));

const YearAvatar = styled(Avatar)(({ theme, isCurrentYear }) => ({
  width: 60,
  height: 60,
  background: isCurrentYear
    ? 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #e8f5e8 100%)',
  color: isCurrentYear ? '#FFD700' : '#2e7d32',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  border: `3px solid ${isCurrentYear ? '#8B4513' : '#4caf50'}`,
}));

const CurrentTournamentBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  color: '#8B4513',
  padding: theme.spacing(1, 2),
  borderRadius: 20,
  fontSize: '0.8rem',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)',
  zIndex: 2,
}));

const NoDataCard = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fff3e0 0%, #ffecb3 100%)',
  border: '2px solid #ff9800',
  borderRadius: 16,
  padding: theme.spacing(6),
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(255, 152, 0, 0.2)',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: '#FFD700',
    height: 4,
  },
  '& .MuiTab-root': {
    fontFamily: '"Times New Roman", serif',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#2e7d32',
    '&.Mui-selected': {
      color: '#FFD700',
    },
  },
}));

// import PlacementSelection from "./PlacementSelection";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tournament-tabpanel-${index}`}
      aria-labelledby={`tournament-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{
          padding: 4,
          background: '#ffffff',
          borderRadius: 2,
          boxShadow: '0 4px 16px rgba(46, 125, 50, 0.1)',
          marginTop: 3
        }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const competitionsQuery = graphql`
  query viewListAllTournamentsQuery {
    tournaments {
      id
      name
      year
    }
  }
`;

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function CompetitionApp(props) {
  const competition_data = useLazyLoadQuery(competitionsQuery, {
    playerId: props.playerId,
  });

  const [value, setValue] = useState(0);
  const currentYear = new Date().getFullYear();

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  if (competition_data.tournaments.length > 0) {
    return (
      <Container maxWidth="lg">
        {/* Tournament Selection Tabs */}
        <Box sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: '0 4px 16px rgba(46, 125, 50, 0.1)',
          marginBottom: 4
        }}>
          <StyledTabs
            value={value}
            onChange={handleTabChange}
            centered
            variant="fullWidth"
          >
            {competition_data.tournaments.map((tournament, i) => {
              const tournamentYear = new Date(tournament.year).getFullYear();
              const isCurrentYear = tournamentYear === currentYear;

              return (
                <Tab
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {isCurrentYear && <StarIcon sx={{ fontSize: '1rem', color: '#FFD700' }} />}
                      {tournament.name}
                      <Chip
                        label={tournamentYear}
                        size="small"
                        sx={{
                          backgroundColor: isCurrentYear ? '#FFD700' : '#2e7d32',
                          color: isCurrentYear ? '#8B4513' : 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>
                  }
                  key={i}
                />
              );
            })}
          </StyledTabs>
        </Box>

        {/* Tournament Details */}
        {competition_data.tournaments.map((tournament, i) => {
          const tournamentYear = new Date(tournament.year).getFullYear();
          const isCurrentYear = tournamentYear === currentYear;

          return (
            <CustomTabPanel value={value} index={i} key={i}>
              <TournamentCard isCurrentYear={isCurrentYear}>
                {isCurrentYear && (
                  <CurrentTournamentBadge>
                    <StarIcon sx={{ fontSize: '1rem' }} />
                    Current Tournament
                  </CurrentTournamentBadge>
                )}

                <TournamentCardHeader isCurrentYear={isCurrentYear}>
                  <Box>
                    <TournamentTitle variant="h4">
                      {tournament.name}
                    </TournamentTitle>
                    <Typography variant="body1" sx={{ opacity: 0.9, marginTop: 1 }}>
                      {isCurrentYear ? 'Active Championship' : 'Tournament Archive'}
                    </Typography>
                  </Box>
                  <YearAvatar isCurrentYear={isCurrentYear}>
                    {tournamentYear}
                  </YearAvatar>
                </TournamentCardHeader>

                <CardContent sx={{ padding: 4 }}>
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        marginBottom: 3
                      }}>
                        <TrophyIcon sx={{
                          fontSize: '3rem',
                          color: isCurrentYear ? '#FFD700' : '#2e7d32'
                        }} />
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: '"Times New Roman", serif',
                              fontWeight: 'bold',
                              color: '#333333'
                            }}
                          >
                            Championship Edition
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#666666' }}>
                            {tournamentYear} Tournament Series
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666666',
                          lineHeight: 1.7,
                          textAlign: 'justify'
                        }}
                      >
                        {isCurrentYear
                          ? "The current championship tournament featuring the latest competition format and rules. Track your progress, view live leaderboards, and compete for the coveted Green Jacket."
                          : `Historical tournament data from ${tournamentYear}. Review past performances, tournament statistics, and championship results from this prestigious competition.`
                        }
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Box sx={{
                        background: isCurrentYear
                          ? 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)'
                          : 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c8 100%)',
                        border: `2px solid ${isCurrentYear ? '#FFD700' : '#2e7d32'}`,
                        borderRadius: 2,
                        padding: 3,
                        textAlign: 'center'
                      }}>
                        <CalendarTodayIcon sx={{
                          fontSize: '2rem',
                          color: isCurrentYear ? '#f57c00' : '#2e7d32',
                          marginBottom: 2
                        }} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 'bold',
                            color: isCurrentYear ? '#f57c00' : '#2e7d32',
                            marginBottom: 1
                          }}
                        >
                          Tournament Status
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#666666' }}>
                          {isCurrentYear ? 'Active Competition' : 'Completed Tournament'}
                        </Typography>
                        <Divider sx={{
                          margin: '16px 0',
                          backgroundColor: isCurrentYear ? '#FFD700' : '#2e7d32'
                        }} />
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#666666' }}>
                          Click to view detailed tournament information and results
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Tournament Actions */}
                  <Box sx={{
                    marginTop: 4,
                    padding: 3,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 2,
                    textAlign: 'center'
                  }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"Times New Roman", serif',
                        fontWeight: 'bold',
                        color: '#2e7d32',
                        marginBottom: 2
                      }}
                    >
                      {isCurrentYear ? 'Tournament Features' : 'Available Data'}
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item>
                        <Chip
                          label={isCurrentYear ? "Live Scoring" : "Final Results"}
                          variant="outlined"
                          color="primary"
                          icon={<SportsGolfIcon />}
                        />
                      </Grid>
                      <Grid item>
                        <Chip
                          label={isCurrentYear ? "Leaderboards" : "Statistics"}
                          variant="outlined"
                          color="primary"
                          icon={<EmojiEventsIcon />}
                        />
                      </Grid>
                      <Grid item>
                        <Chip
                          label="Player History"
                          variant="outlined"
                          color="primary"
                          icon={<CalendarTodayIcon />}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </TournamentCard>
            </CustomTabPanel>
          );
        })}
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <NoDataCard elevation={3}>
        <SportsGolfIcon sx={{ fontSize: '4rem', color: '#ff9800', marginBottom: 2 }} />
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            color: '#f57c00',
            marginBottom: 2
          }}
        >
          No Tournaments Available
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#e65100',
            lineHeight: 1.6,
            marginBottom: 3
          }}
        >
          There are currently no tournament competitions available. Check back later
          for upcoming championship events and tournament announcements.
        </Typography>
        <Divider sx={{ margin: '16px 0', backgroundColor: '#ff9800' }} />
        <Typography
          variant="body2"
          sx={{
            fontStyle: 'italic',
            color: '#ef6c00'
          }}
        >
          "Great tournaments await great champions"
        </Typography>
      </NoDataCard>
    </Container>
  );
}

function CompetitionView(props) {
  const { playerId } = useOutletContext();

  return (
    <CompetitionsContainer>
      <TournamentHeader>
        <EmojiEventsIcon sx={{ fontSize: '4rem', marginBottom: 2 }} />
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white'
          }}
        >
          Tournament Competitions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontWeight: 400,
            color: 'white'
          }}
        >
          Championship Tournaments - Past & Present
        </Typography>
      </TournamentHeader>

      <CompetitionApp playerId={playerId} />

      <Box sx={{ textAlign: 'center', marginTop: 6 }}>
        <Typography
          variant="body2"
          sx={{
            color: '#666666',
            fontStyle: 'italic',
            fontSize: '1rem'
          }}
        >
          "Every tournament tells a story of excellence"
        </Typography>
      </Box>
    </CompetitionsContainer>
  );
}

export default CompetitionView;
