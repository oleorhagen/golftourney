-- CREATE TABLE IF NOT EXISTS tournament (
--     id SERIAL8 PRIMARY KEY, tournament_name STRING NOT NULL
-- );

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS player (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name
    VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS course (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name
    VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS hole (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id uuid NOT NULL,
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
  player_id uuid NOT NULL,
  course_id uuid NOT NULL,
  hole_id uuid NOT NULL,
  CONSTRAINT player_id
    FOREIGN KEY (player_id) REFERENCES player (id),
  CONSTRAINT course_id
    FOREIGN KEY (course_id) REFERENCES course (id),
  CONSTRAINT hole_id
    FOREIGN KEY (hole_id) REFERENCES hole (id)
);

CREATE TABLE IF NOT EXISTS course_handicap (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  handicap INT8 NOT NULL CHECK ( handicap BETWEEN 0 AND 54),
  player_id uuid NOT NULL,
  course_id uuid NOT NULL,
  created_at
    TIMESTAMP DEFAULT now(),
  CONSTRAINT player_id
    FOREIGN KEY (player_id) REFERENCES player (id),
  CONSTRAINT course_id
    FOREIGN KEY (course_id) REFERENCES course (id)
);

CREATE TABLE IF NOT EXISTS competition (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  competition_type VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS competition_score (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  placement INT8 NOT NULL CHECK ( placement BETWEEN 1 AND 4),
  competition_id uuid NOT NULL,
    FOREIGN KEY (competition_id) REFERENCES competition (id),
  player_id uuid NOT NULL,
  CONSTRAINT player_id
    FOREIGN KEY (player_id) REFERENCES player (id)
);

CREATE FUNCTION my_function() RETURNS int AS $$
select count (*) from player
$$ LANGUAGE sql IMMUTABLE;
