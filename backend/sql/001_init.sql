-- CREATE TABLE IF NOT EXISTS tournament (
--     id SERIAL8 PRIMARY KEY, tournament_name STRING NOT NULL
-- );

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS player (
  id
    SERIAL8 PRIMARY KEY,
  name
    VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS course (
  id
    SERIAL8 PRIMARY KEY,
  name
    VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS hole (
    id
        SERIAL8 PRIMARY KEY,
    course_id SERIAL8 NOT NULL,
    nr
        INT8 NOT NULL CHECK (nr BETWEEN 1 AND 18),
    index
        INT8 NOT NULL CHECK (index BETWEEN 1 AND 18),
    par
        INT8 NOT NULL CHECK (par BETWEEN 1 AND 5),
    CONSTRAINT course_id
        FOREIGN KEY (course_id) REFERENCES course (id)
);


CREATE TABLE IF NOT EXISTS score (
  strokes INT8 NOT NULL CHECK (strokes BETWEEN 0 AND 9),
  points INT8 NOT NULL CHECK (points BETWEEN 0 AND 9),
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  player_id SERIAL8 NOT NULL,
  course_id SERIAL8 NOT NULL,
  hole_id SERIAL8 NOT NULL,
  CONSTRAINT player_id
    FOREIGN KEY (player_id) REFERENCES player (id),
  CONSTRAINT course_id
    FOREIGN KEY (course_id) REFERENCES course (id),
  CONSTRAINT hole_id
    FOREIGN KEY (hole_id) REFERENCES hole (id)
);
