-- -- Test the database using pgtap:
-- -- https://pgtap.org/
-- CREATE EXTENSION IF NOT EXISTS pgtap;
SELECT
    plan (1);

SELECT
    IS (1,
        1,
        'placeholder');

SELECT
    *
FROM
    finish ();

-- -- --- Insert another 4 score for the second hole
-- -- -- - Insert a 4 stroke on the second hole at Borregaard
-- -- INSERT INTO physical.hole_score (course_name, scorer_id, hole_nr, scorecard_id, strokes)
-- --     VALUES ('Borregaard', :oleo_id, 2, -- Hole Nr
-- --         (
-- --             SELECT
-- --                 id
-- --             FROM physical.scorecard
-- --             WHERE
-- --                 scorer_id = :oleo_id), 4 -- 4 Strokes
-- -- );
-- -- -- Make sure the score updates accordingly
-- -- SELECT
-- --     IS (ARRAY (
-- --             SELECT
-- --                 total_points::int
-- --             FROM
-- --                 player_points
-- --             WHERE
-- --                 scorer_id = :oleo_id), ARRAY[6], 'Second score for player should give two, and total to 4+2=6 points');
-- -- --
-- -- --- 2. Test the score for teams
-- -- --
-- -- --- Insert another 4 score for the second hole
-- -- -- - Insert a 4 stroke on the second hole at Borregaard
-- -- INSERT INTO physical.hole_score (course_name, scorer_id, hole_nr, scorecard_id, strokes)
-- --     VALUES ('Skjeberg', :team_jo_id, 1, -- Hole Nr
-- --         (
-- --             SELECT
-- --                 id
-- --             FROM physical.scorecard
-- --             WHERE
-- --                 scorer_id = :team_jo_id), 4 -- 4 Strokes
-- -- );
-- -- -- Make sure the score updates accordingly
-- -- SELECT
-- --     IS (ARRAY (
-- --             SELECT
-- --                 total_points::int
-- --             FROM
-- --                 player_points
-- --             WHERE
-- --                 scorer_id = :team_jo_id), ARRAY[3], 'Team score did update correctly');
-- -- -- select is()
-- -- -- prepare ole_p_points as select expected_points, total_points, player_par from statistics.player_points;
-- -- -- prepare expected_points as select 3,
-- -- -- select set_eq()
-- -- -- -- 2. Test the score for teams
-- -- -- -- 3. Test the score for individuals with team and indivudual scores
-- -- -- Plan the tests.
-- -- -- Finish the tests and clean up.
-- -- SELECT
-- --     *
-- -- FROM
-- --     finish ();
-- -- -- ROLLBACK;
