-- Test the database using pgtap:
-- https://pgtap.org/
CREATE EXTENSION IF NOT EXISTS pgtap;

-- \unset ECHO
-- \set QUIET 1
-- Turn off echo and keep things quiet.
-- Format the output for nice TAP.
\pset format unaligned
\pset tuples_only true
\pset pager off
-- Revert all changes on failure.
\set ON_ERROR_ROLLBACK 1
\set ON_ERROR_STOP true
BEGIN;
--
--- Test implementation
--
-- SELECT
--     plan (6);
\set tournament_id '\'942b428e-2c9b-4f7a-9077-ea3cde99e184\''
-- Players IDs
\set oleo_id '\'626fa9fd-95ed-40e8-90f3-139ec79e79b9\''
\set julius_id '\'b885afc9-4f16-423a-b7cf-b880c99fa3f8\''
\set olem_id '\'fcca86fa-fdf3-4814-8c7e-ce9ea320dd08\''
\set marius_id '\'e66ac21a-36ff-441f-9102-755f3515416a\''
\set team_hm_id '\'94ee90bb-7660-4ca3-ad7e-34ade5131272\''
\set team_jo_id '\'94ee90bb-7660-4ca3-ad7e-34ade5131276\''
\i backend/sql-tests/data/tournament.sql
\i backend/sql-tests/data/players.sql
\i backend/sql-tests/data/teams.sql

--- Verify the public schema

-- 001 - public.player
\i backend/sql-tests/001_public_player_test.sql

-- 002 - public.team
\i backend/sql-tests/002_public_team_test.sql

-- Verify that the team memberships are correct
PREPARE jno_team_query AS
SELECT
    tm.player_id
FROM
    physical.team_member AS tm
    INNER JOIN physical.scorer AS s ON tm.team_id = s.id
        AND s.name = 'J&O';

PREPARE expected AS
SELECT
    s.id
FROM
    physical.scorer AS s
WHERE
    s.name LIKE '%Orhagen'
    OR s.name LIKE '%Karling';
SELECT
    set_eq ('jno_team_query', 'expected', 'Team members are correct');
DEALLOCATE PREPARE ALL;
\i backend/sql-tests/data/courses.sql
\i backend/sql-tests/data/scorecards.sql

--- TODO - Test the extra awarded strokes per hole
-- From their slope table, a 20 hcp (which is our scorecard), should award 22 (but now does 23) extra strokes.
--- Meaning that all holes index 1-4 should have two extra strokes, and the rest should have 1.
-- SELECT
--     IS (ARRAY (
--             SELECT
--                 extra_strokes::integer
--             FROM
--                 extra_strokes_per_hole
--             WHERE
--                 course_name = 'Borregaard'
--                 AND player_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
--             ORDER BY
--                 hole_index
--             LIMIT 5),
--         ARRAY[2, 2, 2, 2, 2],
--         'All holes with two extra strokes');
-- -- The remaining holes should have 1s
-- SELECT
--     IS (ARRAY (
--             SELECT
--                 extra_strokes::integer
--             FROM
--                 extra_strokes_per_hole
--             WHERE
--                 course_name = 'Borregaard'
--                 AND player_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
--             ORDER BY
--                 hole_index DESC
--             LIMIT 13),
--         ARRAY[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
--         'All holes with one extra stroke');
-- -- TODO - Test the extra awarded strokes per hole for a 20 hcp (On the scorecard
-- -- it is a 20 hcp)
-- -- - Insert a 3 stroke on the first hole at Borregaard
-- INSERT INTO physical.hole_score (course_name, scorer_id, hole_nr, scorecard_id, strokes)
--     VALUES ('Borregaard', :oleo_id, 1, -- Hole Nr
--         (
--             SELECT
--                 id
--             FROM physical.scorecard
--             WHERE
--                 scorer_id = :oleo_id), 3 -- 3 Strokes
-- );
-- -- 1. Test the score for individual players
-- -- Make sure the score updates accordingly
-- SELECT
--     IS (ARRAY (
--             SELECT
--                 total_points::int
--             FROM
--                 player_points
--             WHERE
--                 scorer_id = :oleo_id), ARRAY[4], 'First score inserted for player should give 4 points');
-- --- Insert another 4 score for the second hole
-- -- - Insert a 4 stroke on the second hole at Borregaard
-- INSERT INTO physical.hole_score (course_name, scorer_id, hole_nr, scorecard_id, strokes)
--     VALUES ('Borregaard', :oleo_id, 2, -- Hole Nr
--         (
--             SELECT
--                 id
--             FROM physical.scorecard
--             WHERE
--                 scorer_id = :oleo_id), 4 -- 4 Strokes
-- );
-- -- Make sure the score updates accordingly
-- SELECT
--     IS (ARRAY (
--             SELECT
--                 total_points::int
--             FROM
--                 player_points
--             WHERE
--                 scorer_id = :oleo_id), ARRAY[6], 'Second score for player should give two, and total to 4+2=6 points');
-- --
-- --- 2. Test the score for teams
-- --
-- --- Insert another 4 score for the second hole
-- -- - Insert a 4 stroke on the second hole at Borregaard
-- INSERT INTO physical.hole_score (course_name, scorer_id, hole_nr, scorecard_id, strokes)
--     VALUES ('Skjeberg', :team_jo_id, 1, -- Hole Nr
--         (
--             SELECT
--                 id
--             FROM physical.scorecard
--             WHERE
--                 scorer_id = :team_jo_id), 4 -- 4 Strokes
-- );
-- -- Make sure the score updates accordingly
-- SELECT
--     IS (ARRAY (
--             SELECT
--                 total_points::int
--             FROM
--                 player_points
--             WHERE
--                 scorer_id = :team_jo_id), ARRAY[3], 'Team score did update correctly');
-- -- select is()
-- -- prepare ole_p_points as select expected_points, total_points, player_par from statistics.player_points;
-- -- prepare expected_points as select 3,
-- -- select set_eq()
-- -- -- 2. Test the score for teams
-- -- -- 3. Test the score for individuals with team and indivudual scores
-- -- Plan the tests.
-- -- Finish the tests and clean up.
-- SELECT
--     *
-- FROM
--     finish ();
-- -- ROLLBACK;
