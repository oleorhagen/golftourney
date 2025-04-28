--
-- - Calculate the points per whole for a given number of strokes
--
CREATE VIEW hole_score AS (
    SELECT
        hs.scorer_id,
        hs.hole_nr,
        hs.course_name,
        hs.scorecard_id,
        hs.strokes,
        hs.stamp,
        extra_strokes,
        greatest (0, par + extra_strokes - strokes + 2) AS points
    FROM
        physical.hole_score AS hs
        INNER JOIN course_hole AS es ON hs.hole_nr = es.hole_nr
            AND hs.course_name = es.course_name
            AND hs.scorer_id = es.player_id);

