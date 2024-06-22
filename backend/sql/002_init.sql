-- Schema for golf DB
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE ROLE postgraphile WITH LOGIN PASSWORD 'foobarbaz';
CREATE SCHEMA IF NOT EXISTS postgraphile AUTHORIZATION postgraphile;
grant all privileges
on all tables in schema postgraphile
to postgraphile
;


-- TODO - Create views for the players, so that we have live updated scores for
-- instance...
CREATE VIEW postgraphile.tournament  AS (
SELECT * FROM physical.tournament
);

CREATE view postgraphile.player AS (
  select id, name, sum(strokes)
  from physical.scorer as s
  natural join physical.player
  natural join physical.hole_score as hs
  where s.id = hs.scorer_id
  group by id
);

CREATE view postgraphile.team AS (
  select tm.team_id, avg(handicap) as handicap
  from physical.team as t
  natural join physical.scorer as s
  inner join physical.team_member as tm on s.id = tm.team_id
  inner join physical.player as p on p.id = player_id
  group by tm.team_id
);

CREATE view postgraphile.team_member AS (
  SELECT * FROM physical.team_member
);

CREATE view postgraphile.course AS (
  SELECT * FROM physical.course
);

CREATE view postgraphile.course_hole AS (
  SELECT * FROM physical.course_hole
);

CREATE view postgraphile.hole_score AS (
  SELECT * FROM physical.hole_score
);

grant select
on all tables in schema postgraphile
to postgraphile
;

