-- Test the public team schema

\i backend/sql-tests/setup.inc

select plan(1);


prepare expected as
values (:team_hm_id, 'H&M', 31),
(:team_jo_id, 'J&O', 22);

-- The public player schema should have ID, name, hcp
select results_eq(
'SELECT id::text, name::text, handicap::int  FROM team',
'expected',
'Unexpected values in public player table'
);


deallocate prepare all;

select *
from
finish();


ROLLBACK;
