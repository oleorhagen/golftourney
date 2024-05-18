-- Schema for golf DB
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE ROLE postgraphile WITH LOGIN PASSWORD 'foobarbaz';
CREATE SCHEMA IF NOT EXISTS postgraphile AUTHORIZATION postgraphile;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA postgraphile TO postgraphile;


-- TODO - Create views for the players, so that we have live updated scores for
-- instance...
CREATE VIEW postgraphile.tournament  AS (
SELECT * FROM physical.tournamet
);

CREATE View postgraphile.scorer as (
SELECT * FROM physical.scorer
);

CREATE view postgraphile.player AS (
SELECT * FROM physical.player
);

CREATE view postgraphile.team AS (
SELECT * FROM physical.team
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

