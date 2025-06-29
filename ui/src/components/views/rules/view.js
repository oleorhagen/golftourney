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
  Chip
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GavelIcon from "@mui/icons-material/Gavel";

const RulesContainer = styled(Box)(({ theme }) => ({
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

const RuleCard = styled(Card)(({ theme, ruleType }) => ({
  background: '#ffffff',
  border: `2px solid ${ruleType === 'course' ? '#2e7d32' : '#1976d2'}`,
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
    background: ruleType === 'course'
      ? 'linear-gradient(45deg, #2e7d32, #4caf50, #2e7d32)'
      : 'linear-gradient(45deg, #1976d2, #42a5f5, #1976d2)',
    borderRadius: 16,
    zIndex: -1,
  },
}));

const RuleHeader = styled(Box)(({ theme, ruleType }) => ({
  background: ruleType === 'course'
    ? 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)'
    : 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
  color: 'white',
  padding: theme.spacing(3),
  borderRadius: '12px 12px 0 0',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const RuleTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: 'bold',
  fontSize: '1.5rem',
}));

const RuleDescription = styled(Typography)(({ theme }) => ({
  color: '#666666',
  lineHeight: 1.6,
  fontStyle: 'italic',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(0, 3),
  marginTop: theme.spacing(2),
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: theme.spacing(2, 3, 3, 3),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  borderLeft: '4px solid #e8f5e8',
  paddingLeft: theme.spacing(2),
  marginBottom: theme.spacing(1),
  borderRadius: '0 8px 8px 0',
  backgroundColor: '#f8f9fa',
  transition: 'all 0.2s ease',
  '&:hover': {
    borderLeftColor: '#2e7d32',
    backgroundColor: '#e8f5e8',
    transform: 'translateX(4px)',
  },
}));

const RuleIcon = styled(Box)(({ theme }) => ({
  fontSize: '2rem',
  marginRight: theme.spacing(1),
}));

const ImportantNotice = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fff3e0 0%, #ffecb3 100%)',
  border: '2px solid #ff9800',
  borderRadius: 12,
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 4px 16px rgba(255, 152, 0, 0.2)',
}));

const tournamentRules = {
  course: {
    title: "On-Course Rules",
    description: "The following rules apply during competitive play and follow standard Rules of Golf with these tournament-specific additions:",
    icon: <GolfCourseIcon />,
    rules: [
      "One mulligan available for each day of individual play",
      "The mulligan can be carried over to the next day if unused",
      "Maximum of 15 clubs allowed in your bag during play",
      "The tournament host has the final say in all rules disputes",
      "Improve lies only in designated areas or adverse conditions",
      "Pace of play: Maximum 4 hours and 30 minutes per round"
    ]
  },
  hospitality: {
    title: "Tournament Hospitality",
    description: "Traditional customs and courtesies that enhance the tournament experience for all participants:",
    icon: <HomeIcon />,
    rules: [
      "On Sunday, all competitors wear red in honor of tournament tradition",
      "Bring your team jerseys from previous years for group photos",
      "The master bedroom is reserved for the reigning champion",
      "Champions dinner on Saturday evening - menu selected by defending champion",
      "Proper golf attire required at all tournament functions",
      "Cell phones on silent during competitive rounds"
    ]
  }
};

const RulesView = () => {
  return (
    <RulesContainer>
      <TournamentHeader>
        <RuleIcon>
          <GavelIcon sx={{ fontSize: '4rem', marginBottom: 2 }} />
        </RuleIcon>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold',
            marginBottom: 2,
            color: 'white'
          }}
        >
          Tournament Rules & Traditions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontWeight: 400,
            color: 'white'
          }}
        >
          Official Regulations - Skjeberg Invitational
        </Typography>
      </TournamentHeader>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {Object.entries(tournamentRules).map(([ruleType, ruleData], index) => (
            <Grid item xs={12} md={6} key={ruleType}>
              <RuleCard ruleType={ruleType}>
                <RuleHeader ruleType={ruleType}>
                  <RuleIcon>{ruleData.icon}</RuleIcon>
                  <RuleTitle variant="h4">
                    {ruleData.title}
                  </RuleTitle>
                </RuleHeader>

                <RuleDescription variant="body1">
                  {ruleData.description}
                </RuleDescription>

                <StyledList>
                  {ruleData.rules.map((rule, i) => (
                    <StyledListItem key={i}>
                      <ListItemText
                        primary={
                          <Typography sx={{
                            fontWeight: 500,
                            color: '#333333',
                            lineHeight: 1.6
                          }}>
                            {rule}
                          </Typography>
                        }
                      />
                    </StyledListItem>
                  ))}
                </StyledList>
              </RuleCard>
            </Grid>
          ))}
        </Grid>

        <ImportantNotice elevation={3}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <EmojiEventsIcon sx={{ fontSize: '2rem', color: '#ff9800', mr: 1 }} />
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Times New Roman", serif',
                fontWeight: 'bold',
                color: '#f57c00'
              }}
            >
              Tournament Director's Notice
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#e65100',
              fontWeight: 500,
              lineHeight: 1.6
            }}
          >
            The Tournament Director reserves the right to modify rules and make final decisions
            on all matters pertaining to the competition. All participants are expected to
            uphold the highest standards of sportsmanship and golf etiquette.
          </Typography>
          <Divider sx={{ margin: '16px 0', backgroundColor: '#ff9800' }} />
          <Typography
            variant="body2"
            sx={{
              fontStyle: 'italic',
              color: '#ef6c00'
            }}
          >
            "Golf is a game of honor and integrity - may the best player win."
          </Typography>
        </ImportantNotice>

        <Box sx={{ textAlign: 'center', marginTop: 6 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#666666',
              fontStyle: 'italic',
              fontSize: '1rem'
            }}
          >
            "Tradition never goes out of style"
          </Typography>
        </Box>
      </Container>
    </RulesContainer>
  );
};

export default RulesView;
