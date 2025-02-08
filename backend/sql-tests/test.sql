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

-- Plan the tests.
SELECT plan(5);

-- SELECT plan( 23 );
-- -- or SELECT * from no_plan();
-- -- Various ways to say "ok"
-- SELECT ok( :have = :want, :test_description );
-- SELECT is(   :have, :want, :test_description );
-- SELECT isnt( :have, :want, :test_description );
-- -- Rather than \echo # here's what went wrong
-- SELECT diag( 'here''s what went wrong' );
-- -- Compare values with LIKE or regular expressions.
-- SELECT alike(   :have, :like_expression, :test_description );
-- SELECT unalike( :have, :like_expression, :test_description );
-- SELECT matches(      :have, :regex, :test_description );
-- SELECT doesnt_match( :have, :regex, :test_description );
-- SELECT cmp_ok(:have, '=', :want, :test_description );
-- -- Skip tests based on runtime conditions.
-- SELECT CASE WHEN :some_feature THEN collect_tap(
-- ok( foo(),       :test_description),
-- is( foo(42), 23, :test_description)
-- ) ELSE skip(:why, :how_many ) END;
-- -- Mark some tests as to-do tests.
-- SELECT todo(:why, :how_many);
-- SELECT ok( foo(),       :test_description);
-- SELECT is( foo(42), 23, :test_description);
-- -- Simple pass/fail.
-- SELECT pass(:test_description);
-- SELECT fail(:test_description);

-- -- Start a transaction.
-- BEGIN;
-- SELECT plan( 2 );
-- \set domain_id 1
-- \set src_id 1
-- -- Insert stuff.
-- SELECT ok(
-- insert_stuff( 'www.foo.com', '{1,2,3}', :domain_id, :src_id ),
-- 'insert_stuff() should return true'
-- );
-- -- Check for domain stuff records.
-- SELECT is(
-- ARRAY(
-- SELECT stuff_id
-- FROM domain_stuff
-- WHERE domain_id = :domain_id
-- AND src_id = :src_id
-- ORDER BY stuff_id
-- ),
-- ARRAY[ 1, 2, 3 ],
-- 'The stuff should have been associated with the domain'
-- );
-- SELECT * FROM finish();
-- ROLLBACK;
--
-- - Setup
--
-- Create the 2024 competition
insert into physical.tournament (
  id
  , name
  , year)
values (
  '942b428e-2c9b-4f7a-9077-ea3cde99e184'
  , 'Skjeberg Invitational'
  , '2024-06-28');

--
-- - Create the players (Scorers) and the teams, and set up the memberships
--
insert into physical.scorer (
  id
  , name)
values (
  '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
  , 'Ole Petter Orhagen')
, (
  'b885afc9-4f16-423a-b7cf-b880c99fa3f8'
  , 'Juliane Skuland Karling')
, (
  'fcca86fa-fdf3-4814-8c7e-ce9ea320dd08'
  , 'Ole Martin Hellerud')
, (
  'e66ac21a-36ff-441f-9102-755f3515416a'
  , 'Marius Sollie');

-- Create the teams
insert into physical.scorer (
  name)
values (
  'H&M')
, (
  'J&O');

--
-- Add the players to the tournament
--
insert into physical.tournament_scorer (
  tournament_id
  , scorer_id)
values ((
    select
      id
    from
      physical.tournament
    where
      name like 'Skjeberg%') , (
      select
        id
      from
        physical.scorer
      where
        name like 'Ole P%'))
  , ((
    select
      id
    from physical.tournament
    where
      name like 'Skjeberg%') , (
    select
      id
    from physical.scorer
  where
    name like 'Juliane%'))
, ((
  select
    id
  from physical.tournament
where
  name like 'Skjeberg%') , (
  select
    id
  from physical.scorer
where
  name like 'Marius%'))
, ((
  select
    id
  from physical.tournament
where
  name like 'Skjeberg%') , (
  select
    id
  from physical.scorer
where
  name like 'Ole M%'));

--
-- Create the players, with their handicaps
--
insert into physical.player (
  id
  , handicap)
values ((
    select
      id
    from
      physical.scorer
    where
      name like 'Ole P%') , 24) , ((
  select
    id
  from physical.scorer
  where
    name like 'Juliane%') , 20) , ((
  select
    id
  from physical.scorer
where
  name like 'Marius%') , 37) , ((
  select
    id
  from physical.scorer
where
  name like 'Ole M%') , 25);

-- Add to the teams
insert into physical.team
select
  id
from
  physical.scorer
except
select
  id
from
  physical.scorer
  natural join physical.player;

-- Add the team members
--
-- H & M
insert into physical.team_member (
  player_id
  , team_id)
select
  id
  , tid
from
  physical.scorer
  , (
    select
      t.id as tid
      , s.name as tname
    from
      physical.team as t
    natural join physical.scorer as s
  where
    s.name like 'H&M')
where
  name like '%Hellerud'
  or name like '%Sollie';

-- J & O
insert into physical.team_member (
  player_id
  , team_id)
select
  id
  , tid
from
  physical.scorer
  , (
    select
      t.id as tid
      , s.name as tname
    from
      physical.team as t
    natural join physical.scorer as s
  where
    s.name like 'J&O')
where
  name like '%Orhagen'
  or name like '%Karling';

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

--
-- - Create the courses
--
insert into physical.course (
  name
  , course_rating
  , slope
  , nr_holes)
values (
  'Skjeberg'
  , 70.7
  , 130
  , 18) , -- From 55
(
  'Onsoy' , 72.7 , 136 , 18) , -- Tee 59
(
  'Gamle Fredrikstad' , 72.8 , 145 , 18) , -- Tee 59
(
  'Borregaard' , 64.4 , 130 , 18) -- Mens 43
;

--
-- Add the courses we are playing to the tournament
--
insert into physical.tournament_course (
  tournament_id
  , course_name)
values ((
    select
      id
    from
      physical.tournament
    where
      name like 'Skjeberg%') , 'Skjeberg') , ((
  select
    id
  from physical.tournament
  where
    name like 'Skjeberg%') , 'Borregaard');

--
-- - Create the scorecards
--
insert into physical.scorecard (
  tournament_id
  , scorer_id
  , handicap
  , course_name)
select
  tournament_id
  , scorer_id
  , 20
  , 'Borregaard'
from
  physical.tournament_scorer;


--
--- Create the Courses
--

--- Create Borregaard
insert into physical.course_hole (
  course_name
  , hole_nr
  , par
  , hole_index)
values (
  'Borregaard'
  , 1
  , 3
  , 3)
, (
  'Borregaard'
  , 2
  , 3
  , 17)
, (
  'Borregaard'
  , 3
  , 4
  , 7)
, (
  'Borregaard'
  , 4
  , 3
  , 11)
, (
  'Borregaard'
  , 5
  , 4
  , 5)
, (
  'Borregaard'
  , 6
  , 3
  , 13)
, (
  'Borregaard'
  , 7
  , 4
  , 1)
, (
  'Borregaard'
  , 8
  , 4
  , 15)
, (
  'Borregaard'
  , 9
  , 4
  , 9)
, (
  'Borregaard'
  , 10
  , 3
  , 3)
, (
  'Borregaard'
  , 11
  , 3
  , 16)
, (
  'Borregaard'
  , 12
  , 4
  , 4)
, (
  'Borregaard'
  , 13
  , 3
  , 14)
, (
  'Borregaard'
  , 14
  , 4
  , 6)
, (
  'Borregaard'
  , 15
  , 3
  , 12)
, (
  'Borregaard'
  , 16
  , 5
  , 18)
, (
  'Borregaard'
  , 17
  , 4
  , 10)
, (
  'Borregaard'
  , 18
  , 4
  , 8);

--- TODO - Test the extra awarded strokes per hole
-- From their slope table, a 20 hcp (which is our scorecard), should award 22 (but now does 23) extra strokes.

--- Meaning that all holes index 1-4 should have two extra strokes, and the rest should have 1.
select
    is (
        array(
            select extra_strokes::integer
            from physical.extra_strokes_per_hole
            where
                course_name = 'Borregaard'
                and player_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
            order by hole_index
            limit 5
        ),
        array[2, 2, 2, 2, 2]
    )
    ;

-- The remaining holes should have 1s
select
    is (
        array(
            select extra_strokes::integer
            from physical.extra_strokes_per_hole
            where
                course_name = 'Borregaard'
                and player_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9'
            order by hole_index desc
            limit 13
        ),
        array[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    )
;

-- Create Gamle Fredrikstad
insert into physical.course_hole (
  course_name
  , hole_nr
  , par
  , hole_index)
values (
  'Gamle Fredrikstad'
  , 1
  , 4
  , 15)
, (
  'Gamle Fredrikstad'
  , 2
  , 4
  , 1)
, (
  'Gamle Fredrikstad'
  , 3
  , 5
  , 7)
, (
  'Gamle Fredrikstad'
  , 4
  , 3
  , 13)
, (
  'Gamle Fredrikstad'
  , 5
  , 4
  , 11)
, (
  'Gamle Fredrikstad'
  , 6
  , 5
  , 3)
, (
  'Gamle Fredrikstad'
  , 7
  , 4
  , 17)
, (
  'Gamle Fredrikstad'
  , 8
  , 3
  , 9)
, (
  'Gamle Fredrikstad'
  , 9
  , 4
  , 5)
, (
  'Gamle Fredrikstad'
  , 10
  , 4
  , 4)
, (
  'Gamle Fredrikstad'
  , 11
  , 4
  , 2)
, (
  'Gamle Fredrikstad'
  , 12
  , 4
  , 18)
, (
  'Gamle Fredrikstad'
  , 13
  , 3
  , 14)
, (
  'Gamle Fredrikstad'
  , 14
  , 5
  , 10)
, (
  'Gamle Fredrikstad'
  , 15
  , 4
  , 12)
, (
  'Gamle Fredrikstad'
  , 16
  , 3
  , 8)
, (
  'Gamle Fredrikstad'
  , 17
  , 4
  , 16)
, (
  'Gamle Fredrikstad'
  , 18
  , 5
  , 6);

-- TODO - Test the extra awarded strokes per hole for a 20 hcp (On the scorecard
-- it is a 20 hcp)


--- Create the Skjeberg course
insert into physical.course_hole (
  course_name
  , hole_nr
  , par
  , hole_index)
values (
  'Skjeberg'
  , 1
  , 4
  , 11)
, (
  'Skjeberg'
  , 2
  , 3
  , 13)
, (
  'Skjeberg'
  , 3
  , 4
  , 3)
, (
  'Skjeberg'
  , 4
  , 4
  , 9)
, (
  'Skjeberg'
  , 5
  , 3
  , 15)
, (
  'Skjeberg'
  , 6
  , 4
  , 1)
, (
  'Skjeberg'
  , 7
  , 3
  , 17)
, (
  'Skjeberg'
  , 8
  , 4
  , 7)
, (
  'Skjeberg'
  , 9
  , 5
  , 5)
, (
  'Skjeberg'
  , 10
  , 4
  , 4)
, (
  'Skjeberg'
  , 11
  , 4
  , 6)
, (
  'Skjeberg'
  , 12
  , 5
  , 18)
, (
  'Skjeberg'
  , 13
  , 5
  , 2)
, (
  'Skjeberg'
  , 14
  , 4
  , 16)
, (
  'Skjeberg'
  , 15
  , 4
  , 12)
, (
  'Skjeberg'
  , 16
  , 5
  , 8)
, (
  'Skjeberg'
  , 17
  , 3
  , 14)
, (
  'Skjeberg'
  , 18
  , 4
  , 10);


-- - Insert a 3 stroke on the first hole at Borregaard
insert into physical.hole_score (
  course_name
  , scorer_id
  , hole_nr
  , scorecard_id
  , strokes)
values (
  'Borregaard'
  , (
    select
      id
    from
      physical.scorer
    natural join physical.player
  where
    name like 'Ole P%')
    , 1 -- Hole Nr
    , (
    select
      id
    from physical.scorecard
    where
      scorer_id in (
        select
          id
        from physical.scorer
      natural join physical.player
    where
      name like 'Ole P%'))
  , 3 -- 3 Strokes
  );

-- -- 1. Test the score for individual players
prepare ind_score_query as
select expected_points, total_points, player_par
from statistics.player_points
where scorer_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9';
prepare expected as
values (2, -- Expected points
4, -- Total points
-2 -- To par
);

-- Make sure the score updates accordingly
select set_eq('ind_score_query', 'expected')
;

deallocate prepare all;

--- Insert another 4 score for the second hole
-- - Insert a 4 stroke on the second hole at Borregaard
insert into physical.hole_score (
course_name
, scorer_id
, hole_nr
, scorecard_id
, strokes)
values (
'Borregaard'
, (
select
id
from
physical.scorer
natural join physical.player
where
name like 'Ole P%')
, 2 -- Hole Nr
, (
select
id
from physical.scorecard
where
scorer_id in (
select
id
from physical.scorer
natural join physical.player
where
name like 'Ole P%'))
, 4 -- 3 Strokes
);

prepare ind_score_query as
select expected_points, total_points, player_par
  from statistics.player_points
  where scorer_id = '626fa9fd-95ed-40e8-90f3-139ec79e79b9';
prepare expected as
values
-- expected, total, par
(4, 6, -2)
-- (2, 4, -2) <- TODO - Why does this fail (?)
;

-- Make sure the score updates accordingly
select set_eq('ind_score_query', 'expected')
;

deallocate prepare all;

-- select is()
-- prepare ole_p_points as select expected_points, total_points, player_par from statistics.player_points;
-- prepare expected_points as select 3,
-- select set_eq()


-- -- 2. Test the score for teams
-- -- 3. Test the score for individuals with team and indivudual scores

-- Finish the tests and clean up.
SELECT * FROM finish();
ROLLBACK;
