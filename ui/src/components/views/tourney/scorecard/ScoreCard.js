import React from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";

import SelectScoreAutoWidth from "./SelectScoreAutoWidth";
import RomanNumeralScore from "./RomanNumeralScore";

const ScorecardContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(3),
  backgroundColor: '#fefefe',
  border: '2px solid #2e7d32',
  borderRadius: 8,
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const ScorecardHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  borderBottom: '3px solid #2e7d32',
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: 'bold',
  color: '#2e7d32',
  letterSpacing: '0.5px',
}));

const PlayerInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: '#f8f9fa',
  borderRadius: 4,
}));

const StyledTable = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-root': {
    borderRight: '1px solid #e0e0e0',
    padding: '8px 4px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
    color: '#333333',
  },
  '& .MuiTableCell-head': {
    backgroundColor: '#2e7d32',
    color: 'white !important',
    fontWeight: 'bold',
    fontSize: '13px',
    padding: '10px 4px',
  },
  '& .hole-number': {
    backgroundColor: '#1b5e20',
    color: 'white !important',
    fontWeight: 'bold',
    minWidth: '30px',
  },
  '& .out-in-total': {
    backgroundColor: '#f5f5f5',
    color: '#333333',
    fontWeight: 'bold',
    borderLeft: '3px solid #2e7d32',
  },
}));

const SummaryBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#f8f9fa',
  borderRadius: 4,
  border: '1px solid #e0e0e0',
}));

export const ScoreCard = (props) => {
  const { player, course, id: scorecardId, handicap } = props;
  const holes = course.holes || [];

  const frontNine = holes.filter(hole => hole.nr <= 9);
  const backNine = holes.filter(hole => hole.nr > 9);

  const calculateTotal = (holesList) => {
    return holesList.reduce((sum, hole) => sum + (hole.strokes || 0), 0);
  };

  const calculateParTotal = (holesList) => {
    return holesList.reduce((sum, hole) => sum + hole.par, 0);
  };

  const frontTotal = calculateTotal(frontNine);
  const backTotal = calculateTotal(backNine);
  const totalScore = frontTotal + backTotal;

  const frontParTotal = calculateParTotal(frontNine);
  const backParTotal = calculateParTotal(backNine);
  const totalPar = frontParTotal + backParTotal;

  const calculatePointsTotal = (holesList) => {
    return holesList.reduce((sum, hole) => sum + (hole.points || 0), 0);
  };

  const frontPointsTotal = calculatePointsTotal(frontNine);
  const backPointsTotal = calculatePointsTotal(backNine);
  const totalPoints = frontPointsTotal + backPointsTotal;

  const renderHoleRow = (label, holesList, showTotal = false, totalValue = 0) => (
    <TableRow key={label}>
      <TableCell className="hole-number">{label}</TableCell>
      {holesList.map((hole) => (
        <TableCell key={`${label}-${hole.nr}`}>
          {label === 'HOLE' && hole.nr}
          {label === 'PAR' && hole.par}
          {label === 'HCP' && hole.index}
          {label === 'EXTRA' && <RomanNumeralScore number={hole.extra_strokes} />}
          {label === 'SCORE' && (
            <SelectScoreAutoWidth
              scorecardId={scorecardId}
              hole={hole}
            />
          )}
          {label === 'POINTS' && (hole.points ?? '')}
        </TableCell>
      ))}
      {showTotal && (
        <TableCell className="out-in-total">
          {totalValue}
        </TableCell>
      )}
    </TableRow>
  );

  return (
    <ScorecardContainer elevation={3}>
      <ScorecardHeader>
        <CourseTitle variant="h4" component="h1">
          {course.name}
        </CourseTitle>
        <Typography variant="h6" color="textSecondary" sx={{ mt: 1 }}>
          OFFICIAL SCORE CARD
        </Typography>
      </ScorecardHeader>

      <PlayerInfo>
        <Box>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Player: {player.name}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" component="span">
            Handicap: {handicap}
          </Typography>
        </Box>
      </PlayerInfo>

      {/* Front Nine */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 1, color: '#2e7d32', fontWeight: 'bold' }}>
          OUT
        </Typography>
        <TableContainer>
          <StyledTable size="small">
            <TableHead>
              <TableRow>
                <TableCell className="hole-number">HOLE</TableCell>
                {frontNine.map((hole) => (
                  <TableCell key={hole.nr}>{hole.nr}</TableCell>
                ))}
                <TableCell className="out-in-total">OUT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderHoleRow('PAR', frontNine, true, frontParTotal)}
              {renderHoleRow('HCP', frontNine)}
              {renderHoleRow('EXTRA', frontNine)}
              {renderHoleRow('SCORE', frontNine, true, frontTotal)}
              {renderHoleRow('POINTS', frontNine, true, frontNine.reduce((sum, hole) => sum + (hole.points || 0), 0))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Box>

      {/* Back Nine */}
      {backNine.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1, color: '#2e7d32', fontWeight: 'bold' }}>
            IN
          </Typography>
          <TableContainer>
            <StyledTable size="small">
              <TableHead>
                <TableRow>
                  <TableCell className="hole-number">HOLE</TableCell>
                  {backNine.map((hole) => (
                    <TableCell key={hole.nr}>{hole.nr}</TableCell>
                  ))}
                  <TableCell className="out-in-total">IN</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {renderHoleRow('PAR', backNine, true, backParTotal)}
                {renderHoleRow('HCP', backNine)}
                {renderHoleRow('EXTRA', backNine)}
                {renderHoleRow('SCORE', backNine, true, backTotal)}
                {renderHoleRow('POINTS', backNine, true, backNine.reduce((sum, hole) => sum + (hole.points || 0), 0))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </Box>
      )}

      {/* Score Summary */}
      <SummaryBox>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            SCORE SUMMARY
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 3 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>STROKES</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">OUT</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{frontTotal}</Typography>
              </Box>
              {backNine.length > 0 && (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="textSecondary">IN</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{backTotal}</Typography>
                </Box>
              )}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">TOTAL</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                  {totalScore}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">TO PAR</Typography>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  color: totalScore > totalPar ? '#d32f2f' : totalScore < totalPar ? '#2e7d32' : '#757575'
                }}>
                  {totalScore > totalPar ? `+${totalScore - totalPar}` :
                   totalScore < totalPar ? `${totalScore - totalPar}` : 'E'}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>POINTS</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">OUT</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{frontPointsTotal}</Typography>
              </Box>
              {backNine.length > 0 && (
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="textSecondary">IN</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{backPointsTotal}</Typography>
                </Box>
              )}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">TOTAL</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                  {totalPoints}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </SummaryBox>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          Course Rating: {course.course_rating} • Slope: {course.slope}
        </Typography>
      </Box>
    </ScorecardContainer>
  );
};

export default ScoreCard;
