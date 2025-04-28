create schema if not exists holeutils;

-- Utility function for calculating the extra strokes given slope and hcp
create function holeutils.tot_extra_strokes_per_player(handicap float, slope float)
returns int
as $$
    SELECT
        int8(round(handicap * (slope / 113))) AS extra_strokes_tot
$$
language sql
stable strict;

-- extra strokes for a given hole, given tot extra strokes, nr holes, and the
-- index. Is just a bucket function essentially, distributing the strokes mod nr
-- holes.
create function holeutils.hole_extra_strokes(extra_strokes_tot int, nr_holes int, hole_index int)
returns int
as $$
    SELECT
        int8((extra_strokes_tot / nr_holes) + (17 + extra_strokes_tot % nr_holes / (hole_index)) / nr_holes) AS extra_strokes -- (+17) Normalize to (0,1)
$$
language sql
stable strict;

--
-- - Distribute the extra strokes over the holes
--
-- - The number of extra strokes per hole, per player, or team
--
create or replace view course_hole as (
    select distinct
        sc.id,
        sc.tournament_id,
        sc.scorer_id as player_id,
        sc.handicap,
        ch.hole_nr,
        ch.hole_index,
        ch.par,
        ch.course_name,
        holeutils.hole_extra_strokes(
            holeutils.tot_extra_strokes_per_player(sc.handicap, c.slope), c.nr_holes::integer, ch.hole_index::integer
        )            as extra_strokes
    from
        physical.scorecard as sc
        inner join physical.course_hole as ch on sc.course_name = ch.course_name
        inner join physical.course as c on ch.course_name = c.name
);
