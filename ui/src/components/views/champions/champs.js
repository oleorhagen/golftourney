import React from "react";

import "./champs.css";

import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Box,
  Chip,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ChampionCard = styled(Card)(({ theme, rank }) => ({
  maxWidth: 400,
  width: '100%',
  background: '#ffffff',
  border: '3px solid #FFD700',
  borderRadius: 16,
  boxShadow: rank === 1
    ? '0 12px 32px rgba(255, 215, 0, 0.4)'
    : '0 8px 24px rgba(46, 125, 50, 0.15)',
  transition: 'all 0.3s ease',
  overflow: 'visible',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: rank === 1
      ? '0 16px 40px rgba(255, 215, 0, 0.5)'
      : '0 12px 32px rgba(46, 125, 50, 0.25)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    background: rank === 1
      ? 'linear-gradient(45deg, #FFD700, #FFA500, #FFD700)'
      : 'linear-gradient(45deg, #2e7d32, #4caf50, #2e7d32)',
    borderRadius: 16,
    zIndex: -1,
  },
}));

const ChampionAvatar = styled(Avatar)(({ theme, rank }) => ({
  width: 80,
  height: 80,
  border: rank === 1 ? '3px solid #FFD700' : '3px solid #2e7d32',
  fontSize: '2rem',
  fontWeight: 'bold',
  background: rank === 1
    ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    : 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
}));

const ChampionImage = styled(CardMedia)(({ theme }) => ({
  height: 240,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
  },
}));

const ChampionName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: 'bold',
  color: '#2e7d32',
  textAlign: 'center',
}));

const YearChip = styled(Chip)(({ theme, rank }) => ({
  background: rank === 1
    ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    : 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
  color: rank === 1 ? '#8B4513' : 'white',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  margin: theme.spacing(0.5),
}));

const RankBadge = styled(Box)(({ theme, rank }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: rank === 1
    ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    : rank === 2
    ? 'linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%)'
    : 'linear-gradient(135deg, #CD7F32 0%, #B8860B 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: rank === 1 ? '#8B4513' : 'white',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  zIndex: 2,
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  color: '#2e7d32',
}));

export const PreviousChampion = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const { championRank = 1 } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getRankSuffix = (rank) => {
    const lastDigit = rank % 10;
    const lastTwoDigits = rank % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return 'th';
    }

    switch (lastDigit) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const year = new Date(props.date).getFullYear();

  return (
    <ChampionCard rank={championRank}>
      <Box sx={{ position: 'relative' }}>
        <RankBadge rank={championRank}>
          {championRank === 1 ? '🥇' : championRank === 2 ? '🥈' : '🥉'}
        </RankBadge>

        <ChampionImage
          component="img"
          image={props.img}
          alt={`${props.name} champion photo`}
        />
      </Box>

      <CardHeader
        avatar={
          <ChampionAvatar rank={championRank} aria-label={props.avatarName}>
            {props.avatarName}
          </ChampionAvatar>
        }
        title={
          <ChampionName variant="h5">
            {props.name}
          </ChampionName>
        }
        subheader={
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <YearChip
              rank={championRank}
              label={`${year} Champion`}
              icon={<EmojiEventsIcon />}
              size="medium"
            />
          </Box>
        }
        sx={{ paddingBottom: 1 }}
      />

      <CardContent sx={{ paddingTop: 0, paddingBottom: 1 }}>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            color: '#2e7d32',
            marginBottom: 1
          }}
        >
          "{props.short}"
        </Typography>

        <Divider sx={{
          margin: '12px 0',
          backgroundColor: championRank === 1 ? '#FFD700' : '#e8f5e8',
          height: 2
        }} />

        <Typography
          variant="body2"
          sx={{
            color: '#666666',
            textAlign: 'center',
            lineHeight: 1.6
          }}
        >
          {championRank === 1 ? 'Reigning Champion' : `${championRank}${getRankSuffix(championRank)} Place`}
        </Typography>
      </CardContent>

      <CardActions disableSpacing sx={{ paddingTop: 0 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          color: '#2e7d32',
          fontSize: '0.9rem',
          fontWeight: 600
        }}>
          Read Full Story
        </Box>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{
          paddingTop: 2,
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #e8f5e8'
        }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#2e7d32',
              marginBottom: 2,
              fontFamily: '"Times New Roman", serif'
            }}
          >
            Championship Story
          </Typography>
          <Typography
            paragraph
            sx={{
              color: '#333333',
              lineHeight: 1.7,
              textAlign: 'justify'
            }}
          >
            {props.story}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontStyle: 'italic',
              color: '#666666',
              textAlign: 'right',
              marginTop: 2
            }}
          >
            — {props.date}
          </Typography>
        </CardContent>
      </Collapse>
    </ChampionCard>
  );
};

export default PreviousChampion;
