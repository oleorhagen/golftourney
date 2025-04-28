--
-- - Calculate the points per whole for a given number of strokes
--
create view hole_score as (
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
        inner join course_hole as es on hs.hole_nr = es.hole_nr
            and hs.course_name = es.course_name
            and hs.scorer_id = es.player_id
);
