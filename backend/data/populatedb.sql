--
-- - Create the 2024 competition
--
insert into physical.tournament (name, year)
values ('Skjeberg Invitational', '2024-06-28');

select *
from physical.tournament
;

--
-- - Create the players (Scorers) and the teams, and set up the memberships
--
insert into physical.scorer (name)
values ('Ole Petter Orhagen'),
('Juliane Skuland Karling'),
('Ole Martin Hellerud'),
('Marius Sollie')
;

insert into physical.player (id, handicap)
values
(( select id from physical.scorer where name like 'Ole P%' ), 24),
(( select id from physical.scorer where name like 'Juliane%' ), 20),
(( select id from physical.scorer where name like 'Marius%' ), 37),
(( select id from physical.scorer where name like 'Ole M%' ), 25)
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
values ('Skjeberg', 70.7, 130, 18), -- From 55
       ('Onsoy', 45, 45, 18), -- TODO - Get data
       ('Gamle Fredrikstad', 45, 45, 18), -- TODO - Get the data
       ('Borregaard', 45, 45, 18) -- TODO - get the data
;

select *
from physical.course
;

-- insert into physical.course_hole (course_name, hole_nr, hole_index, par)
-- values
-- ('Gamle Fredrikstad', (copy physical.course_hole (hole_nr, hole_index, par ) from
-- 'gamle-fredrikstad.csv' delimiter ',' CSV HEADER))
-- ;
insert into
physical.course_hole
(course_name, hole_nr, par, hole_index)
values
('Gamle Fredrikstad' , 1  , 4 , 15) ,
('Gamle Fredrikstad' , 2  , 4 , 1)  ,
('Gamle Fredrikstad' , 3  , 5 , 7)  ,
('Gamle Fredrikstad' , 4  , 3 , 13) ,
('Gamle Fredrikstad' , 5  , 4 , 11) ,
('Gamle Fredrikstad' , 6  , 5 , 3)  ,
('Gamle Fredrikstad' , 7  , 4 , 17) ,
('Gamle Fredrikstad' , 8  , 3 , 9)  ,
('Gamle Fredrikstad' , 9  , 4 , 5)  ,
('Gamle Fredrikstad' , 10 , 4 , 4)  ,
('Gamle Fredrikstad' , 11 , 4 , 2)  ,
('Gamle Fredrikstad' , 12 , 4 , 18) ,
('Gamle Fredrikstad' , 13 , 3 , 14) ,
('Gamle Fredrikstad' , 14 , 5 , 10) ,
('Gamle Fredrikstad' , 15 , 4 , 12) ,
('Gamle Fredrikstad' , 16 , 3 , 8)  ,
('Gamle Fredrikstad' , 17 , 4 , 16) ,
('Gamle Fredrikstad' , 18 , 5 , 6)
;

select *
from physical.course_hole
;


insert into
physical.course_hole
(course_name, hole_nr, par, hole_index)
values
('Skjeberg' , 1  , 4 , 11) ,
('Skjeberg' , 2  , 3 , 13) ,
('Skjeberg' , 3  , 4 , 3)  ,
('Skjeberg' , 4  , 4 , 9)  ,
('Skjeberg' , 5  , 3 , 15) ,
('Skjeberg' , 6  , 4 , 1)  ,
('Skjeberg' , 7  , 3 , 17) ,
('Skjeberg' , 8  , 4 , 7)  ,
('Skjeberg' , 9  , 5 , 5)  ,
('Skjeberg' , 10 , 4 , 4)  ,
('Skjeberg' , 11 , 4 , 6)  ,
('Skjeberg' , 12 , 5 , 18) ,
('Skjeberg' , 13 , 5 , 2)  ,
('Skjeberg' , 14 , 4 , 16) ,
('Skjeberg' , 15 , 4 , 12) ,
('Skjeberg' , 16 , 5 , 8)  ,
('Skjeberg' , 17 , 3 , 14) ,
('Skjeberg' , 18 , 4 , 10)
;

insert into
physical.course_hole
(course_name, hole_nr, par, hole_index)
values
  ('Borregaard' , 1  , 3 , 3)  ,
  ('Borregaard' , 2  , 3 , 17) ,
  ('Borregaard' , 3  , 4 , 7)  ,
  ('Borregaard' , 4  , 3 , 11) ,
  ('Borregaard' , 5  , 4 , 5)  ,
  ('Borregaard' , 6  , 3 , 13) ,
  ('Borregaard' , 7  , 4 , 1)  ,
  ('Borregaard' , 8  , 4 , 15) ,
  ('Borregaard' , 9  , 4 , 9)  ,
  ('Borregaard' , 10 , 3 , 3)  ,
  ('Borregaard' , 11 , 3 , 16) ,
  ('Borregaard' , 12 , 4 , 4)  ,
  ('Borregaard' , 13 , 3 , 14) ,
  ('Borregaard' , 14 , 4 , 6)  ,
  ('Borregaard' , 15 , 3 , 12) ,
  ('Borregaard' , 16 , 5 , 18) ,
  ('Borregaard' , 17 , 4 , 10) ,
  ('Borregaard' , 18 , 4 , 8)
;

-- TODO - Delete
-- - Insert a few dummy scores for me
insert into physical.hole_score (course_name, scorer_id, hole_nr, strokes)
values
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole P%'), 1, 3),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole P%'), 2, 4),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole P%'), 3, 5),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole P%'), 4, 5)
;

insert into physical.hole_score (course_name, scorer_id, hole_nr, strokes)
values
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole M%'), 1, 3),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole M%'), 2, 4),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole M%'), 3, 5),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole M%'), 4, 5),
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole M%'), 5, 7)
('Borregaard', (select id from physical.scorer natural join physical.player where name like 'Ole M%'), 6, 10)
;

-- - Calculate the total score for each player
select id, name, sum(strokes)
from physical.scorer as s
natural join physical.player
natural join physical.hole_score as hs
where s.id = hs.scorer_id
group by id
;

-- Calculate the number of extra handicap strokes per player
select id, name, handicap * 130 / 113
from physical.scorer
natural join physical.player
;

--
-- - Distribute the extra strokes over the holes
-- Let's just do one course first
-- Hardcode the nr_extra_strokes for now
--
select *, 27 / 18 + (ch.hole_index / (27 % 18)) as extra_strokes
from physical.course_hole as ch
where course_name = 'Borregaard'
;

-- - Calculate the points per whole for a given number of strokes
select *, greatest(0, par + extra_strokes - strokes + 2) as points
from physical.hole_score
natural join
    (
        select *, 27 / 18 + (ch.hole_index / (27 % 18)) as extra_strokes
        from physical.course_hole as ch
        where course_name = 'Borregaard'
    )
;

-- - Calculate the total points for each player
-- TODO - How on earth do I do this (?)
-- Need some formula for the points attainable at each hole...
-- - Query for the player view, with score accounted for


