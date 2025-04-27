
--
-- - Create the players (Scorers) and the teams, and set up the memberships
--
insert into physical.scorer (
id,
name
)
values (
'626fa9fd-95ed-40e8-90f3-139ec79e79b9',
'Ole Petter Orhagen'
),
(
'b885afc9-4f16-423a-b7cf-b880c99fa3f8',
'Juliane Skuland Karling'
),
(
'fcca86fa-fdf3-4814-8c7e-ce9ea320dd08',
'Ole Martin Hellerud'
),
(
'e66ac21a-36ff-441f-9102-755f3515416a',
'Marius Sollie'
);


--
-- Add the players to the tournament
--
insert into physical.tournament_scorer (
    tournament_id,
    scorer_id
)
values ((
    select id
    from
        physical.tournament
    where
        name like 'Skjeberg%'
), (
    select id
    from
        physical.scorer
    where
        name like 'Ole P%'
)),
((
    select id
    from physical.tournament
    where
        name like 'Skjeberg%'
), (
    select id
    from physical.scorer
    where
        name like 'Juliane%'
)),
((
    select id
    from physical.tournament
    where
        name like 'Skjeberg%'
), (
    select id
    from physical.scorer
    where
        name like 'Marius%'
)),
((
    select id
    from physical.tournament
    where
        name like 'Skjeberg%'
), (
    select id
    from physical.scorer
    where
        name like 'Ole M%'
));
