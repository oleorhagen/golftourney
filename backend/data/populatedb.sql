--
-- - Create the 2024 competition
--
insert into physical.tournament (name, year)
values ('Skjeberg Invitational', '2024-06-28');

--
-- - Create the players (Scorers) and the teams, and set up the memberships
--
insert into physical.scorer (name)
values ('Ole Petter Orhagen'),
('Juliane Skuland Karling'),
('Ole Martin Hellerud'),
('Marius Sollie')
;

-- insert into physical.player ();
INSERT INTO physical.player (id)
SELECT id
FROM physical.scorer;

-- Verify that it works
select *
from physical.player
natural join physical.scorer
;

-- Create the teams
insert into physical.scorer (name)
values ('H&M'),
('J&O')
;

insert into physical.team
select id
from physical.scorer
except
select id
from physical.scorer
natural join physical.player
;

-- Verify that the teams have been created
select *
from physical.team
natural join physical.scorer
;

-- Add the team members
--
-- H & M
insert into physical.team_member (player_id, team_id)
select id, tid
from
physical.scorer,
(
select t.id as tid, s.name as tname
from physical.team as t
natural join physical.scorer as s
where s.name like 'H&M'
)
where name like '%Hellerud' or name like '%Sollie'
;

-- J & O
insert into physical.team_member (player_id, team_id)
select id, tid
from
    physical.scorer,
    (
        select t.id as tid, s.name as tname
        from physical.team as t
        natural join physical.scorer as s
        where s.name like 'J&O'
    )
where name like '%Orhagen' or name like '%Karling'
;

-- Verify that the team memberships are correct
select *
from physical.scorer
natural join physical.team_member
natural join physical.team
;

select distinct *
from physical.scorer
natural join physical.team_member
;

-- List all teams, and their members
select *
from physical.scorer as s
inner join physical.team_member as tm on s.id = tm.player_id
inner join physical.team as t on tm.team_id = t.id, physical.scorer as ps
where t.id = ps.id
;

--
-- - Create the courses
--
insert into physical.course (name, course_rating, slope, nr_holes)
values ('Skjeberg', 70.7, 130, 18) -- From 55
;

select *
from physical.course
;


-- Copy from the CSV files (par, index/slope)
-- \copy ../.. FROM '${PWD}/${f}.txt' WITH (FORMAT CSV)


