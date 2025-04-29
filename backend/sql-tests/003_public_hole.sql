-- Test the public hole view, with the extra awarded strokes for Borregaard

\i backend/sql-tests/setup.inc

select plan(2);


-- From their slope table, a 20 hcp (which is our scorecard), should award 22
-- (but now does 23) extra strokes. Meaning that all holes index 1-4 should have
-- two extra strokes, and the rest should have 1.
select
    is(array(
        select extra_strokes::integer
        from
            public.course_hole
        where
            course_name = 'Borregaard'
            and player_id = :oleo_id
        order by
            hole_index
        limit 5
    ),
    array[2, 2, 2, 2, 2],
    'All holes with two extra strokes');


-- The remaining holes should have 1s
select
    is(array(
        select extra_strokes::integer
        from
            course_hole
        where
            course_name = 'Borregaard'
            and player_id = :oleo_id
        order by
            hole_index desc
        limit 13
    ),
    array[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    'All holes with one extra stroke');


select *
from
    finish();

rollback;
