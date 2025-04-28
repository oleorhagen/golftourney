-- Schema for golf DB
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE ROLE postgraphile WITH LOGIN PASSWORD 'foobarbaz';

-- create schema if not exists public authorization postgraphile;
GRANT ALL privileges ON ALL tables IN SCHEMA public TO postgraphile;

CREATE VIEW player AS (
    SELECT
        id,
        name,
        handicap
    FROM
        physical.scorer AS s
    NATURAL JOIN physical.player
    NATURAL JOIN physical.hole_score AS hs
WHERE
    s.id = hs.scorer_id);

CREATE VIEW team AS (
    SELECT
        s.id,
        s.name,
        avg(handicap) AS handicap
    FROM
        physical.team AS t
    NATURAL JOIN physical.scorer AS s
    INNER JOIN physical.team_member AS tm ON s.id = tm.team_id
    INNER JOIN physical.player AS p ON p.id = player_id
GROUP BY
    s.id);

-- Unify the scorer table, with all required data
CREATE VIEW scorer AS (
    SELECT
        id,
        name,
        handicap
    FROM
        player
    UNION
    SELECT
        id,
        name,
        handicap
    FROM
        team);

-- create view scorer_total_points as (
--     select
--         scorer_id,
--         sum(points) as total_points
--     from
--         player_points_per_hole
--     group by
--         scorer_id
-- );
-- create view player_points as (
--     select
--         scorer_id,
--         sum(points) as total_points
--     from
--         player_points_per_hole
--     group by
--         scorer_id
-- );
-- Functioning score board for all scorers
-- create view player_total_points as (
--     select
--         s.id,
--         coalesce(pp.total_points, 0)
--         + coalesce(team_points.total_points, 0) as total_points
--     from
--         physical.scorer as s
--         left outer join player_points as pp on s.id = pp.scorer_id
--         left outer join (
--             select
--                 p.id,
--                 total_points
--             from
--                 physical.player as p
--                 inner join physical.team_member as tm on p.id = tm.player_id
--                 inner join
--                     player_points pp
--                     on tm.team_id = pp.scorer_id
--         ) as team_points on s.id = team_points.id
-- );
-- Function which calculates the points for a player per hole given a hole_score
-- entry (which has all the data we need for this)
-- create or replace function hole_score_points(
--     hole physical.hole_score
-- )
-- returns int8
-- as $$
--   select
--     points
--   from
--     player_points_per_hole as ph
--   where
--     ph.scorer_id = hole.scorer_id
--     and ph.course_name = hole.course_name
--     and ph.scorecard_id = hole.scorecard_id
--     and ph.hole_nr = hole.hole_nr
-- $$
-- language sql
-- stable strict;
-- Returns the points for a hole, given a hole and player_id, and scorecard_id
-- create or replace function course_hole_points(
--     hole physical.course_hole,
--     player_id uuid,
--     scorecard_id uuid
-- )
-- returns int8
-- as $$
--   select
--     points
--   from
--     player_points_per_hole as ph
--   where
--     ph.scorer_id = scorer_id
--     and ph.scorecard_id = scorecard_id
--     and ph.course_name = hole.course_name
--     and ph.hole_nr = hole.hole_nr
-- $$
-- language sql
-- stable strict;
GRANT SELECT ON ALL tables IN SCHEMA public TO postgraphile;

