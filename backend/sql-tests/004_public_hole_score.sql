-- Test the public hole view, with the extra awarded strokes for Borregaard

\i backend/sql-tests/setup.inc

select plan(1);


-- TODO - Test the extra awarded strokes per hole for a 20 hcp (On the scorecard
-- it is a 20 hcp)
-- - Insert a 3 stroke on the first hole at Borregaard
insert into physical.hole_score (course_name, scorer_id, hole_nr, scorecard_id, strokes)
values (
    'Borregaard', :oleo_id, 1, -- Hole Nr
    (
        select id
        from physical.scorecard
        where
            scorer_id = :oleo_id
    ), 3 -- 3 Strokes
);

-- 1. Test the score for individual players
-- Make sure the score updates accordingly
select
    is(array(
        select points::int
        from
            hole_score
        where
            scorer_id = :oleo_id
    ), array[4], 'First score inserted for player should give 4 points');

select *
from
    finish();
