--
-- - Create the scorecards
--
INSERT INTO physical.scorecard (tournament_id, scorer_id, handicap, course_name)
SELECT
    tournament_id,
    scorer_id,
    20,
    'Borregaard'
FROM
    physical.tournament_scorer;

--- Create the scorecard for the teams on the Skjeberg course
INSERT INTO physical.scorecard (tournament_id, scorer_id, handicap, course_name)
SELECT
    :tournament_id AS tournament_id,
    team_id AS scorer_id,
    handicap,
    'Skjeberg' AS course_name
FROM
    physical.team_hcp;

