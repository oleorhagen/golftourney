--
-- - Schema for golf DB
--
create extension if not exists "uuid-ossp";

create schema if not exists physical authorization postgres;

create table physical.tournament (
    id uuid default uuid_generate_v4(),
    name varchar(50) not null,
    year date not null,
    primary key (id)
);

create table physical.course (
    name varchar(50),
    -- Indicates how difficult the course is expected to be for a bogey golfer
    slope float not null,
    -- The number of strokes a scratch is expected to use
    course_rating float not null,
    nr_holes int8 not null,
    primary key (name)
);

create table physical.tournament_course (
    tournament_id uuid,
    course_name varchar(50),
    primary key (tournament_id, course_name),
    foreign key (tournament_id) references physical.tournament (
        id
    ) on delete cascade,
    foreign key (course_name) references physical.course (
        name
    ) on delete cascade
);

create table physical.scorer (
    id uuid default uuid_generate_v4(),
    name varchar(50) not null,
    primary key (id)
);

create table physical.tournament_scorer (
    tournament_id uuid,
    scorer_id uuid,
    primary key (tournament_id, scorer_id),
    foreign key (tournament_id) references physical.tournament (
        id
    ) on delete cascade,
    foreign key (scorer_id) references physical.scorer (id) on delete cascade
);

create domain valid_handicap as float check (value between -54 and 54);

create table physical.scorecard (
    id uuid default uuid_generate_v4(),
    tournament_id uuid references physical.tournament (id) on delete cascade,
    scorer_id uuid not null references physical.scorer (id) on delete cascade,
    handicap valid_handicap not null,
    course_name varchar(50) not null references physical.course (
        name
    ) on delete cascade,
    primary key (id)
);

create table physical.tournament_scorecard (
    tournament_id uuid,
    scorecard_id uuid,
    primary key (tournament_id, scorecard_id),
    foreign key (tournament_id) references physical.tournament (
        id
    ) on delete cascade,
    foreign key (scorecard_id) references physical.scorecard (
        id
    ) on delete cascade
);

create table physical.player (
    id uuid,
    handicap valid_handicap not null,
    primary key (id),
    foreign key (id) references physical.scorer (id) on delete cascade
);

create table physical.team (
    id uuid,
    primary key (id),
    foreign key (id) references physical.scorer (id) on delete cascade
);

create table physical.team_member (
    player_id uuid,
    team_id uuid,
    primary key (player_id, team_id),
    foreign key (player_id) references physical.player (id) on delete cascade,
    foreign key (team_id) references physical.team (id) on delete cascade
);

-- A team to materialize the handicap for a team
-- TODO - Make a function for determining the team handicap
create view physical.team_hcp as (
    select
        team_id,
        avg(handicap) as handicap
    from physical.team_member as tm
        inner join physical.player as p on tm.player_id = p.id
    group by team_id
);

create table physical.course_hole (
    hole_nr int8 check (hole_nr between 1 and 18),
    course_name varchar(50),
    hole_index int8 not null check (hole_index between 1 and 18),
    par int8 not null check (par between 1 and 5),
    primary key (hole_nr, course_name),
    foreign key (course_name) references physical.course (
        name
    ) on delete cascade,
    unique (hole_nr, course_name, hole_index)
);

create table physical.hole_score (
    scorer_id uuid,
    scorecard_id uuid,
    course_name varchar(50),
    hole_nr int8,
    strokes int8 not null check (strokes > 0),
    stamp timestamp default now(),
    primary key (scorer_id, scorecard_id, course_name, hole_nr),
    foreign key (hole_nr, course_name) references physical.course_hole (
        hole_nr, course_name
    ),
    foreign key (scorer_id) references physical.scorer (id) on delete cascade,
    foreign key (scorecard_id) references physical.scorecard (
        id
    ) on delete cascade
);
