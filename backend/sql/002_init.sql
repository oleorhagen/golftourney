-- Schema for golf DB
create extension if not exists "uuid-ossp";

create role postgraphile with login password 'foobarbaz';

create schema if not exists postgraphile authorization postgraphile;

grant all privileges on all tables in schema postgraphile to postgraphile;

create view postgraphile.tournament as (
    select *
    from
        physical.tournament
);

create view postgraphile.tournament_course as (
    select *
    from
        physical.tournament_course
);

create view postgraphile.tournament_scorer as (
    select *
    from
        physical.tournament_scorer
);

create view postgraphile.player as (
    select
        id,
        name,
        handicap
    from
        physical.scorer as s
        natural join physical.player
        natural join physical.hole_score as hs
    where
        s.id = hs.scorer_id
);

create view postgraphile.team as (
    select
        s.id,
        s.name,
        avg(handicap) as handicap
    from
        physical.team as t
        natural join physical.scorer as s
        inner join physical.team_member as tm on s.id = tm.team_id
        inner join physical.player as p on p.id = player_id
    group by
        s.id
);

-- Unify the scorer table, with all required data
create view postgraphile.scorer as (
    select
        id,
        name,
        handicap
    from
        postgraphile.player
    union
    select
        id,
        name,
        handicap
    from
        postgraphile.team
);

create view postgraphile.team_member as (
    select *
    from
        physical.team_member
);

create view postgraphile.course as (
    select *
    from
        physical.course
);

create view postgraphile.course_hole as (
    select *
    from
        physical.course_hole
);

create view postgraphile.hole_score as (
    select *
    from
        physical.hole_score
);

--
-- - Calculate the points per whole for a given number of strokes
--
create view postgraphile.player_points_per_hole as (
    select
        hs.scorer_id,
        hs.hole_nr,
        hs.course_name,
        hs.scorecard_id,
        hs.strokes,
        hs.stamp,
        extra_strokes,
        greatest(0, par + extra_strokes - strokes + 2) as points
    from
        physical.hole_score as hs
        inner join
            physical.extra_strokes_per_hole as es
            on hs.hole_nr = es.hole_nr
                and hs.course_name = es.course_name
                and hs.scorer_id = es.player_id
);

create view postgraphile.scorer_total_points as (
    select
        scorer_id,
        sum(points) as total_points
    from
        postgraphile.player_points_per_hole
    group by
        scorer_id
);

create view postgraphile.player_points as (
    select
        scorer_id,
        sum(points) as total_points
    from
        postgraphile.player_points_per_hole
    group by
        scorer_id
);

-- Functioning score board for all scorers
create view postgraphile.player_total_points as (
    select
        s.id,
        coalesce(pp.total_points, 0)
        + coalesce(team_points.total_points, 0) as total_points
    from
        physical.scorer as s
        left outer join postgraphile.player_points as pp on s.id = pp.scorer_id
        left outer join (
            select
                p.id,
                total_points
            from
                physical.player as p
                inner join physical.team_member as tm on p.id = tm.player_id
                inner join
                    postgraphile.player_points pp
                    on tm.team_id = pp.scorer_id
        ) as team_points on s.id = team_points.id
);

-- Function which calculates the points for a player per hole given a hole_score
-- entry (which has all the data we need for this)
create or replace function physical.hole_score_points(
    hole physical.hole_score
)
returns int8
as $$
  select
    points
  from
    postgraphile.player_points_per_hole as ph
  where
    ph.scorer_id = hole.scorer_id
    and ph.course_name = hole.course_name
    and ph.scorecard_id = hole.scorecard_id
    and ph.hole_nr = hole.hole_nr
$$
language sql
stable strict;

-- Returns the points for a hole, given a hole and player_id, and scorecard_id
create or replace function physical.course_hole_points(
    hole physical.course_hole,
    player_id uuid,
    scorecard_id uuid
)
returns int8
as $$
  select
    points
  from
    postgraphile.player_points_per_hole as ph
  where
    ph.scorer_id = scorer_id
    and ph.scorecard_id = scorecard_id
    and ph.course_name = hole.course_name
    and ph.hole_nr = hole.hole_nr
$$
language sql
stable strict;

grant select on all tables in schema postgraphile to postgraphile;
