CREATE TABLE IF NOT EXISTS tournament (
    id SERIAL PRIMARY KEY,
    tournament_name STRING NOT NULL
);

CREATE TABLE IF NOT EXISTS course (
    id SERIAL PRIMARY KEY,
    course_name STRING NOT NULL,
    -- TODO - Should be an enum type (single, team)
    style STRING NOT NULL,
    CONSTRAINT tournament_id
        FOREIGN KEY (tournament_id)
        REFERENCES tournament (id)
);

CREATE TABLE IF NOT EXISTS tee (
    id
        SERIAL PRIMARY KEY,
    name
        STRING NOT NULL,
    nr
        INT NOT NULL,
    CONSTRAINT course_id
        FOREIGN KEY (course_id) REFERENCES course (id)
);

CREATE TABLE IF NOT EXISTS hole (
    id
        SERIAL PRIMARY KEY,
    nr
        INT NOT NULL CHECK (strokes BETWEEN 1 AND 18),
    strokes
        INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    CONSTRAINT tee_id
        FOREIGN KEY (tee_id) REFERENCES tee (id)
);
