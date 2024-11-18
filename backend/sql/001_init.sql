--
-- - Schema for golf DB
--
create extension if not exists "uuid-ossp";

create schema if not exists physical authorization postgres;

create table physical.tournament (
  id uuid default uuid_generate_v4 ()
  , name varchar(50) not null
  , year date not null
  , primary key (id)
);

create table physical.tournament_course (
  tournament_id uuid
  , course_name varchar(50)
  , primary key (tournament_id , course_name)
  , foreign key (tournament_id) references physical.tournament (id) on delete cascade
  , foreign key (course_name) references physical.course (name) on delete cascade
);

create table physical.scorer (
  id uuid default uuid_generate_v4 ()
  , name varchar(50) not null
  , primary key (id)
);

create table physical.tournament_scorer (
  tournament_id uuid
  , scorer_id uuid
  , primary key (tournament_id , scorer_id)
  , foreign key (tournament_id) references physical.tournament (id) on delete cascade
  , foreign key (scorer_id) references physical.scorer (id) on delete cascade
);

create domain valid_handicap as int8 check (VALUE between -54 and 54);

create table physical.player (
  id uuid
  , handicap valid_handicap not null
  , primary key (id)
  , foreign key (id) references physical.scorer (id) on delete cascade
);

create table physical.team (
  id uuid
  , primary key (id)
  , foreign key (id) references physical.scorer (id) on delete cascade
);

create table physical.team_member (
  player_id uuid
  , team_id uuid
  , primary key (player_id , team_id)
  , foreign key (player_id) references physical.player (id) on delete cascade
  , foreign key (team_id) references physical.team (id) on delete cascade
);

create table physical.course (
  name varchar(50)
  , slope float not null , -- Indicates how difficult the course is expected to be for a bogey golfer
  course_rating float not null , -- The number of strokes a scratch is expected to use
  nr_holes int8 not null
  , primary key (name)
);

create table physical.course_hole (
  hole_nr int8 check (hole_nr between 1 and 18)
  , course_name varchar(50)
  , hole_index int8 not null check (hole_index between 1 and 18)
  , par int8 not null check (par between 1 and 5)
  , primary key (hole_nr , course_name)
  , foreign key (course_name) references physical.course (name) on delete cascade
  , unique (hole_nr , course_name , hole_index)
);

create table physical.hole_score (
  scorer_id uuid
  , hole_nr int8
  , course_name varchar(50)
  , strokes int8 not null check (strokes > 0)
  , stamp timestamp default now()
  , tournament_id uuid
  , primary key (scorer_id , hole_nr , course_name)
  , foreign key (hole_nr , course_name) references physical.course_hole (hole_nr , course_name)
  , foreign key (scorer_id) references physical.scorer (id) on delete cascade
  , foreign key (tournament_id) references physical.tournament (id)
);

