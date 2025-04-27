-- Test the database using pgtap:
-- https://pgtap.org/
CREATE EXTENSION IF NOT EXISTS pgtap;

\unset ECHO
\set QUIET 1
-- Turn off echo and keep things quiet.

-- Format the output for nice TAP.
\pset format unaligned
\pset tuples_only true
\pset pager off

-- Revert all changes on failure.
\set ON_ERROR_ROLLBACK 1
\set ON_ERROR_STOP true

-- Load the TAP functions.
BEGIN;
-- \i pgtap.sql
-- \i test_impl.sql

--
--- Test implementation
--

select plan(6);

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

-- Verify that the team memberships are correct
prepare jno_team_query as
select tm.player_id
from physical.team_member as tm
inner join physical.scorer as s on tm.team_id = s.id and s.name = 'J&O'
;

prepare expected as
select s.id
from physical.scorer as s
where s.name like '%Orhagen' or s.name like '%Karling'
;

select set_eq('jno_team_query', 'expected', 'Team members are correct')
;

deallocate prepare all;

\i backend/sql-tests/data/courses.sql

\i backend/sql-tests/data/scorecards.sql


--- TODO - Test the extra awarded strokes per hole
-- From their slope table, a 20 hcp (which is our scorecard), should award 22 (but now does 23) extra strokes.

--- Meaning that all holes index 1-4 should have two extra strokes, and the rest should have 1.
select
    is(
        array(
            select extra_strokes::integer
            from physical.extra_strokes_per_hole
            where
                course_name = 'Borregaard'
                and player_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
            order by hole_index
            limit 5
        ),
        array[2, 2, 2, 2, 2],
        'All holes with two extra strokes'
    )
;

-- The remaining holes should have 1s
select
    is(
        array(
            select extra_strokes::integer
            from physical.extra_strokes_per_hole
            where
                course_name = 'Borregaard'
                and player_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
            order by hole_index desc
            limit 13
        ),
        array[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        'All holes with one extra stroke'
    )
;

-- TODO - Test the extra awarded strokes per hole for a 20 hcp (On the scorecard
-- it is a 20 hcp)


-- - Insert a 3 stroke on the first hole at Borregaard
insert into physical.hole_score (
    course_name,
    scorer_id,
    hole_nr,
    scorecard_id,
    strokes
)
values (
    'Borregaard',
    :oleo_id,
    1, -- Hole Nr
    (
        select id
        from physical.scorecard
        where
            scorer_id = :oleo_id
    ),
    3 -- 3 Strokes
);

-- 1. Test the score for individual players

-- Make sure the score updates accordingly
select
    is (
        array(
            select total_points::int
            from postgraphile.player_points
            where scorer_id = :oleo_id
        ),
        array[ 4 ],
        'First score inserted for player should give 4 points'
    )
;

--- Insert another 4 score for the second hole
-- - Insert a 4 stroke on the second hole at Borregaard
insert into physical.hole_score (
    course_name,
    scorer_id,
    hole_nr,
    scorecard_id,
    strokes
)
values (
    'Borregaard',
    :oleo_id,
    2, -- Hole Nr
    (
        select id
        from physical.scorecard
        where
            scorer_id = :oleo_id
            ),
    4 -- 4 Strokes
);

-- Make sure the score updates accordingly
select
    is (
        array(
            select total_points::int
            from postgraphile.player_points
            where scorer_id = :oleo_id
        ),
        array[ 6 ],
        'Second score for player should give two, and total to 4+2=6 points'
    )
;

--
--- 2. Test the score for teams
--

--- Insert another 4 score for the second hole
-- - Insert a 4 stroke on the second hole at Borregaard
insert into physical.hole_score (
    course_name,
    scorer_id,
    hole_nr,
    scorecard_id,
    strokes
)
values (
    'Skjeberg',
    :team_jo_id,
    1, -- Hole Nr
    (
        select id
        from physical.scorecard
        where
            scorer_id = :team_jo_id
    ),
    4 -- 4 Strokes
);

-- Make sure the score updates accordingly
select
    is (
        array(
            select total_points::int
            from postgraphile.player_points
            where scorer_id = :team_jo_id
        ),
        array[ 3 ],
        'Team score did update correctly'
    )
;

-- select is()
-- prepare ole_p_points as select expected_points, total_points, player_par from statistics.player_points;
-- prepare expected_points as select 3,
-- select set_eq()


-- -- 2. Test the score for teams
-- -- 3. Test the score for individuals with team and indivudual scores
-- Plan the tests.
-- Finish the tests and clean up.
SELECT * FROM finish();
ROLLBACK;
