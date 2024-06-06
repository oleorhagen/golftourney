-- Schema for golf DB
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS physical AUTHORIZATION postgres;

CREATE TABLE physical.tournament (
	id UUID DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL,
  year DATE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE physical.scorer (
id
UUID DEFAULT uuid_generate_v4(),
name
VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE physical.player (
id UUID,
PRIMARY KEY (id),
FOREIGN KEY (id)
REFERENCES physical.scorer (id) ON DELETE CASCADE
);

CREATE TABLE physical.team (
id UUID,
PRIMARY KEY (id),
FOREIGN KEY (id)
REFERENCES physical.scorer (id) ON DELETE CASCADE
);

CREATE TABLE physical.team_member (
player_id UUID, team_id UUID,
PRIMARY KEY (player_id, team_id),
FOREIGN KEY (player_id)
REFERENCES physical.player (id) ON DELETE CASCADE,
FOREIGN KEY (team_id) REFERENCES physical.team (id)
);

CREATE TABLE physical.competition_score (
tournament_id
UUID,
player_id
UUID,
points
INT8 NOT NULL,
PRIMARY KEY (tournament_id, player_id),
FOREIGN KEY (tournament_id)
REFERENCES physical.tournament (id)
ON DELETE CASCADE,
FOREIGN KEY (player_id)
REFERENCES physical.player (id) ON DELETE CASCADE
);

CREATE TABLE physical.course (
	name VARCHAR(50), slope INT8,
	PRIMARY KEY (name)
);

CREATE TABLE physical.course_hole (
	hole_nr
		INT8 CHECK (hole_nr BETWEEN 1 AND 18),
	course_name
		VARCHAR(50),
	hole_index
		INT8 NOT NULL CHECK (hole_index BETWEEN 1 AND 18),
	par
		INT8 NOT NULL CHECK (par BETWEEN 1 AND 5),
	PRIMARY KEY (hole_nr, course_name),
	FOREIGN KEY (course_name)
		REFERENCES physical.course (name) ON DELETE CASCADE
);

CREATE TABLE physical.hole_score (
	strokes
		INT8,
	scorer_id
		UUID,
	team_id
		UUID,
	hole_nr
		INT8,
	course_name
		VARCHAR(50),
	PRIMARY KEY (scorer_id, hole_nr, course_name),
	FOREIGN KEY (hole_nr, course_name)
		REFERENCES physical.course_hole (
			hole_nr,
			course_name
		),
	FOREIGN KEY (scorer_id)
		REFERENCES physical.scorer (id) ON DELETE CASCADE
);

