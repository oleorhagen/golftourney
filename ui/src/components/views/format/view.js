import React from "react";

import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Avatar
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlagIcon from "@mui/icons-material/Flag";

const FormatContainer = styled(Box)(({ theme }) => ({
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

const FormatCard = styled(Card)(({ theme }) => ({
  background: '#ffffff',
  border: '2px solid #2e7d32',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(46, 125, 50, 0.15)',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  position: 'relative',
  marginBottom: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-2px)',
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

const DayCard = styled(Card)(({ theme, dayType }) => ({
  background: '#ffffff',
  border: `3px solid ${dayType === 'team' ? '#1976d2' : '#2e7d32'}`,
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(46, 125, 50, 0.15)',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  position: 'relative',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 32px rgba(46, 125, 50, 0.25)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    background: dayType === 'team'
      ? 'linear-gradient(45deg, #1976d2, #42a5f5, #1976d2)'
      : 'linear-gradient(45deg, #2e7d32, #4caf50, #2e7d32)',
    borderRadius: 16,
    zIndex: -1,
  },
}));

const DayHeader = styled(Box)(({ theme, dayType }) => ({
  background: dayType === 'team'
    ? 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
    : 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
  color: 'white',
  padding: theme.spacing(3),
  borderRadius: '12px 12px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const DayNumber = styled(Avatar)(({ theme, dayType }) => ({
  width: 60,
  height: 60,
  background: dayType === 'team'
    ? 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #e8f5e8 100%)',
  color: dayType === 'team' ? '#1976d2' : '#2e7d32',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  border: `3px solid ${dayType === 'team' ? '#42a5f5' : '#4caf50'}`,
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
}));

const CompetitionChip = styled(Chip)(({ theme, dayType }) => ({
  background: dayType === 'team'
    ? 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
    : 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  margin: theme.spacing(0.5),
  textTransform: 'uppercase',
}));

const FormatDescription = styled(Typography)(({ theme }) => ({
  color: '#666666',
  lineHeight: 1.7,
  textAlign: 'justify',
  marginBottom: theme.spacing(3),
}));

const formatText = `The Skjeberg Invitational is a prestigious four-day tournament featuring elite competition across multiple renowned golf courses. This championship format combines both individual excellence and team strategy, creating a comprehensive test of golf skills and sportsmanship.`;

const tournamentFormat = {
  team: {
    title: "Team Play Format",
    description: "Strategic team competitions featuring handicap-adjusted scoring and tactical play requirements. Teams are formed based on tournament standings to ensure competitive balance.",
    rules: [
      "Team handicap calculated as average of members minus 20%",
      "No player may take more than 2 consecutive tee shots",
      "One designated 'worst ball' hole per round",
      "Teams formed: 1st & 3rd place vs 2nd & 4th place"
    ]
  },
  individual: {
    title: "Individual Play Format",
    description: "Pure individual competition showcasing personal skill and course management. Players compete head-to-head with standard stroke play scoring.",
    rules: [
      "One mulligan available per day of individual play",
      "Mulligans may be carried over to next individual day",
      "Standard Rules of Golf apply",
      "Lowest total score wins the day"
    ]
  }
};

const tournamentDays = [
  {
    day: 1,
    course: "Gamle Fredrikstad Golf Club",
    type: "team",
    format: "Better Ball Match Play",
    competition: "Iron Play Challenge",
    description: "Opening day team competition on this classic Norwegian layout",
    par: 72,
    yardage: "6,845 yards"
  },
  {
    day: 2,
    course: "Borregaard Golf Club",
    type: "individual",
    format: "Individual Stroke Play",
    competition: "Putting Precision",
    description: "Individual championship round featuring challenging green complexes",
    par: 71,
    yardage: "6,420 yards"
  },
  {
    day: 3,
    course: "Skjeberg Golf Club",
    type: "team",
    format: "Alternate Shot",
    competition: "Short Game Mastery",
    description: "The championship venue - where legends are made",
    par: 72,
    yardage: "6,950 yards"
  },
  {
    day: 4,
    course: "Onsøy Golf Club",
    type: "individual",
    format: "Individual Stroke Play",
    competition: "Driving Accuracy",
    description: "Final day individual competition to crown the champion",
    par: 70,
    yardage: "6,380 yards"
  }
];

const FormatView = () => {
  return (
    <FormatContainer>
      <TournamentHeader>
        <CalendarTodayIcon sx={{ fontSize: '4rem', marginBottom: 2 }} />
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white'
          }}
        >
          Tournament Format
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontWeight: 400,
            color: 'white'
          }}
        >
          Four Days of Championship Golf - Skjeberg Invitational
        </Typography>
      </TournamentHeader>

      <Container maxWidth="lg">
        {/* Tournament Overview */}
        <FormatCard>
          <CardContent sx={{ padding: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmojiEventsIcon sx={{ fontSize: '2rem', color: '#2e7d32', mr: 2 }} />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Times New Roman", serif',
                  fontWeight: 'bold',
                  color: '#2e7d32'
                }}
              >
                Championship Overview
              </Typography>
            </Box>
            <FormatDescription variant="body1">
              {formatText}
            </FormatDescription>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  padding: 3,
                  backgroundColor: '#e8f5e8',
                  borderRadius: 2,
                  border: '2px solid #2e7d32'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2e7d32', mb: 2 }}>
                    Tournament Structure
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666666' }}>
                    • 4 competitive days<br/>
                    • 2 individual stroke play rounds<br/>
                    • 2 team competition days<br/>
                    • 4 prestigious golf courses
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{
                  padding: 3,
                  backgroundColor: '#e3f2fd',
                  borderRadius: 2,
                  border: '2px solid #1976d2'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
                    Championship Points
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666666' }}>
                    • Daily skills competitions<br/>
                    • Cumulative scoring system<br/>
                    • Individual & team champions<br/>
                    • Green Jacket presentation
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </FormatCard>

        {/* Tournament Days */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            color: '#2e7d32',
            textAlign: 'center',
            marginBottom: 4
          }}
        >
          Championship Schedule
        </Typography>

        <Grid container spacing={4}>
          {tournamentDays.map((day) => (
            <Grid item xs={12} sm={6} lg={3} key={day.day}>
              <DayCard dayType={day.type}>
                <DayHeader dayType={day.type}>
                  <Box>
                    <CourseTitle variant="h6">
                      Day {day.day}
                    </CourseTitle>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {day.type === 'team' ? 'Team Competition' : 'Individual Play'}
                    </Typography>
                  </Box>
                  <DayNumber dayType={day.type}>
                    {day.type === 'team' ? <GroupsIcon /> : <PersonIcon />}
                  </DayNumber>
                </DayHeader>

                <CardContent sx={{ padding: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Times New Roman", serif',
                      fontWeight: 'bold',
                      color: '#333333',
                      marginBottom: 2
                    }}
                  >
                    {day.course}
                  </Typography>

                  <Box sx={{ marginBottom: 2 }}>
                    <CompetitionChip
                      dayType={day.type}
                      label={day.competition}
                      icon={<SportsGolfIcon />}
                      size="small"
                    />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6,
                      marginBottom: 2
                    }}
                  >
                    {day.description}
                  </Typography>

                  <Divider sx={{ margin: '16px 0', backgroundColor: '#e8f5e8' }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333333' }}>
                      Par {day.par}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666' }}>
                      {day.yardage}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: day.type === 'team' ? '#1976d2' : '#2e7d32',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 1
                    }}
                  >
                    {day.format}
                  </Typography>
                </CardContent>
              </DayCard>
            </Grid>
          ))}
        </Grid>

        {/* Format Details */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            color: '#2e7d32',
            textAlign: 'center',
            marginTop: 6,
            marginBottom: 4
          }}
        >
          Competition Formats
        </Typography>

        <Grid container spacing={4}>
          {Object.entries(tournamentFormat).map(([formatType, formatData]) => (
            <Grid item xs={12} md={6} key={formatType}>
              <FormatCard>
                <Box sx={{
                  background: formatType === 'team'
                    ? 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
                    : 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                  color: 'white',
                  padding: 3,
                  borderRadius: '12px 12px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  {formatType === 'team' ? <GroupsIcon sx={{ fontSize: '2rem' }} /> : <PersonIcon sx={{ fontSize: '2rem' }} />}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Times New Roman", serif',
                      fontWeight: 'bold'
                    }}
                  >
                    {formatData.title}
                  </Typography>
                </Box>

                <CardContent sx={{ padding: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6,
                      marginBottom: 3,
                      fontStyle: 'italic'
                    }}
                  >
                    {formatData.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#333333',
                      marginBottom: 2
                    }}
                  >
                    Format Rules:
                  </Typography>

                  <List sx={{ padding: 0 }}>
                    {formatData.rules.map((rule, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          padding: '8px 0',
                          borderLeft: `4px solid ${formatType === 'team' ? '#1976d2' : '#2e7d32'}`,
                          paddingLeft: 2,
                          marginBottom: 1,
                          backgroundColor: '#f8f9fa',
                          borderRadius: '0 8px 8px 0'
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography sx={{
                              fontWeight: 500,
                              color: '#333333',
                              fontSize: '0.95rem'
                            }}>
                              {rule}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </FormatCard>
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
            "Four days, four courses, one champion"
          </Typography>
        </Box>
      </Container>
    </FormatContainer>
  );
};

export default FormatView;
