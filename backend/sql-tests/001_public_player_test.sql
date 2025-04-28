-- select plan(1);

-- -- The public player schema should have ID, name, hcp
-- select results_eq(
--     'SELECT id::text, name::text, handicap::int  FROM player',
--     $$VALUES ( '626fa9fd-95ed-40e8-90f3-139ec79e79b9' , 'Ole Petter Orhagen', 24),
--     ('b885afc9-4f16-423a-b7cf-b880c99fa3f8','Juliane Skuland Karling',20),
--     ('fcca86fa-fdf3-4814-8c7e-ce9ea320dd08','Ole Martin Hellerud',25),
--     ('e66ac21a-36ff-441f-9102-755f3515416a','Marius Sollie',37)$$,
--     'Unexpected values in public player table'
-- );


-- select *
-- from
--     finish();
