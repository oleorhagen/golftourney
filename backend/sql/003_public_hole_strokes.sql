CREATE SCHEMA IF NOT EXISTS holeutils;

-- Utility function for calculating the extra strokes given slope and hcp
CREATE FUNCTION holeutils.tot_extra_strokes_per_player (handicap float, slope float)
    RETURNS int
    AS $$
    SELECT
        int8(round(handicap * (slope / 113))) AS extra_strokes_tot
$$
LANGUAGE sql
STABLE STRICT;

-- extra strokes for a given hole, given tot extra strokes, nr holes, and the
-- index. Is just a bucket function essentially, distributing the strokes mod nr
-- holes.
CREATE FUNCTION holeutils.hole_extra_strokes (extra_strokes_tot int, nr_holes int, hole_index int)
    RETURNS int
    AS $$
    SELECT
        int8((extra_strokes_tot / nr_holes) + (17 + extra_strokes_tot % nr_holes / (hole_index)) / nr_holes) AS extra_strokes -- (+17) Normalize to (0,1)
$$
LANGUAGE sql
STABLE STRICT;

--
-- - Distribute the extra strokes over the holes
--
-- - The number of extra strokes per hole, per player, or team
--
CREATE OR REPLACE VIEW course_hole AS (
    SELECT DISTINCT
        sc.id,
        sc.tournament_id,
        sc.scorer_id AS player_id,
        sc.handicap,
        ch.hole_nr,
        ch.hole_index,
        ch.par,
        ch.course_name,
        holeutils.hole_extra_strokes (holeutils.tot_extra_strokes_per_player (sc.handicap, c.slope), c.nr_holes::integer, ch.hole_index::integer) AS extra_strokes
    FROM
        physical.scorecard AS sc
        INNER JOIN physical.course_hole AS ch ON sc.course_name = ch.course_name
        INNER JOIN physical.course AS c ON ch.course_name = c.name);

