-- Create statistics for all holes:
--
--- par 3
--- par 4
--- par 5
--
--- Statistics for all players
--
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
  scorer_id , par;

-- Create statistics for the given tournaments
-- Then for
select
  *
from
  postgraphile.player_points_per_hole
  natural join physical.course_hole;

select
  scorer_id
  , sum(points) over (partition by scorer_id order by stamp)
from
  postgraphile.player_points_per_hole;
  -- TODO - make sure we can filter on tournament_id here

