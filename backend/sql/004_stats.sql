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
--- Showing stddev, and the average points per hole
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

create view physical.player_statistics as (
       select * from statistics.player
);

select
  s.scorer_id
  , tournament_id
  , sum(points) over (partition by s.scorer_id order by stamp asc) as cumulative_score
from
  postgraphile.player_points_per_hole as ph
  inner join physical.scorecard as s on s.scorer_id = ph.scorer_id;

-- A view which contains the columns of the running score of a player.
create or replace view statistics.player_points as (
  select
    scorer_id
    , tournament_id
    , expected_points
    , total_points
    , expected_points - total_points as player_par
  from (
    select
      s.scorer_id
      , tournament_id
      , sum(points) over (partition by s.scorer_id order by stamp asc) as total_points
      , 2 * count(points) over (partition by s.scorer_id order by stamp asc) as expected_points
    from
      postgraphile.player_points_per_hole as ph
      inner join physical.scorecard as s on s.scorer_id = ph.scorer_id));

-- Add a function to generate a column for a player in the physical schema the
-- UI is consuming
-- TODO - it needs to have the team points added
create or replace function physical.player_par (
  _player physical.player
)
  returns int8
  as $$
  select
    player_par
  from
    statistics.player_points as pp
  where
    pp.scorer_id = _player.id
$$
language sql
stable strict;

-- A function which is used as a custom query in the GraphQL API
create or replace function physical.statistics ()
  returns table (
      scorer_id uuid
      , tournament_id uuid
      , expected_points int8
      , total_points int8
      , player_par int8
    )
    as $$
  select
    scorer_id
    , tournament_id
    , expected_points
    , total_points
    , player_par
  from
    statistics.player_points
$$
language sql
stable strict;

grant select on all tables in schema statistics to statistics;

