--
-- - Schema for golf DB
--
-- TODO - Format this with some postgresql formatter which handles tables
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE SCHEMA IF NOT EXISTS physical AUTHORIZATION postgres;

CREATE TABLE physical.tournament (
	id
    UUID DEFAULT uuid_generate_v4(),
  name
    VARCHAR(50) NOT NULL,
  year
    DATE NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE physical.tournament_course (
  tournament_id UUID,
  course_name VARCHAR(50),
  PRIMARY KEY (tournament_id, course_name),
  FOREIGN KEY(tournament_id)
    REFERENCES physical.tournament (id)
      ON DELETE CASCADE,
  FOREIGN KEY (course_name)
   REFERENCES physical.course (name)
      ON DELETE CASCADE
);

CREATE TABLE physical.scorer (
  id
    UUID DEFAULT uuid_generate_v4(),
  name
    VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE physical.tournament_scorer (
  tournament_id UUID,
  scorer_id UUID,
  PRIMARY KEY (tournament_id, scorer_id),
  FOREIGN KEY (tournament_id)
    REFERENCES physical.tournament (id)
      ON DELETE CASCADE,
  FOREIGN KEY (scorer_id)
    REFERENCES physical.scorer (id)
      ON DELETE CASCADE
);

create domain valid_handicap as int8
CHECK
  (VALUE BETWEEN -54 AND 54);

CREATE TABLE physical.player (
  id
    UUID,
  handicap
    valid_handicap NOT NULL ,
  PRIMARY KEY (id),
  FOREIGN KEY (id)
    REFERENCES physical.scorer (id) ON DELETE CASCADE
);

CREATE TABLE physical.team (
  id
    UUID,
  PRIMARY KEY (id),
  FOREIGN KEY (id)
    REFERENCES physical.scorer (id) ON DELETE CASCADE
);

CREATE TABLE physical.team_member (
  player_id
    UUID,
  team_id
    UUID,
  PRIMARY KEY (player_id, team_id),
  FOREIGN KEY (player_id)
    REFERENCES physical.player (id) ON DELETE CASCADE,
  FOREIGN KEY (team_id)
    REFERENCES physical.team (id) ON DELETE CASCADE
);

CREATE TABLE physical.player_tournament_score (
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
    REFERENCES physical.player (id)
      ON DELETE CASCADE
);

CREATE TABLE physical.course (
	name
    VARCHAR(50),
  slope
    float NOT NULL, -- Indicates how difficult the course is expected to be for a bogey golfer
  course_rating
    float NOT NULL, -- The number of strokes a scratch is expected to use
  nr_holes
    INT8 NOT NULL,
	PRIMARY KEY (name)
);

CREATE TABLE physical.course_hole (
	hole_nr
		INT8 CHECK (hole_nr BETWEEN 1 AND 18),
	course_name
		VARCHAR(50),
	hole_index
		INT8
      NOT NULL
      CHECK (hole_index BETWEEN 1 AND 18),
	par
		INT8
      NOT NULL
      CHECK (par BETWEEN 1 AND 5),
	PRIMARY KEY (hole_nr, course_name),
	FOREIGN KEY (course_name)
		REFERENCES physical.course (name) ON DELETE CASCADE,
  UNIQUE (hole_nr, course_name, hole_index)
);

CREATE TABLE physical.scorecard (
tournament_id
UUID,
course_name
VARCHAR (50),
PRIMARY KEY (tournament_id, course_name),
FOREIGN KEY (tournament_id)
REFERENCES physical.tournament (id),
FOREIGN KEY (course_name)
REFERENCES physical.course (id)
);

CREATE TABLE physical.hole_score (
scorer_id
UUID,
hole_nr
INT8,
course_name
VARCHAR(50),
strokes
INT8 NOT NULL CHECK (strokes > 0),
stamp
TIMESTAMP DEFAULT NOW(),
tournament_id
UUID,
PRIMARY KEY (scorer_id, hole_nr, course_name),
FOREIGN KEY (hole_nr, course_name)
REFERENCES physical.course_hole (
hole_nr,
course_name
),
FOREIGN KEY (scorer_id)
REFERENCES physical.scorer (id) ON DELETE CASCADE,
FOREIGN KEY (tournament_id, course_name)
REFERENCES physical.scorecard (tournament_id, course_name)
);

