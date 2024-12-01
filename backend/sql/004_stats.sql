create role statistics with login password 'foobarbaz';

create schema if not exists statistics authorization statistics;

grant all privileges on all tables in schema statistics to statistics;

-- Create statistics for all holes:
--
--- par 3
--- par 4
--- par 5
--
--- Statistics for all players
--
create view statistics.player as (
  select
    scorer_id
    , par
    , stddev(strokes) as stddev_strokes
    , stddev(points) as stddev_points
    , avg(strokes) as average_strokes
    , avg(points) as average_points
  from
    postgraphile.player_points_per_hole
  natural join physical.course_hole
group by
  scorer_id , par);

-- Add the cumulative of a players score
create or replace function statistics.cumulative_score (
  _tournament_id uuid
)
  returns table (
      scorer_id uuid
      , score int8
    )
    as $$
  select
    scorer_id
    , sum(points) over (partition by scorer_id order by stamp asc)
  from
    postgraphile.player_points_per_hole
  where
    scorecard_id in (
      select
        scorecard_id
      from
        physical.scorecard
      where
        tournament_id = _tournament_id
      group by
        scorer_id
      order by
        stamp)
$$
language sql
stable strict;

grant select on all tables in schema statistics to statistics;

