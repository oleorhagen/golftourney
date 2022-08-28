CREATE TABLE IF NOT EXISTS tournament (
    id SERIAL8 PRIMARY KEY, tournament_name STRING NOT NULL
);

CREATE TABLE IF NOT EXISTS course (
    id
        SERIAL8 PRIMARY KEY,
    course_name
        STRING NOT NULL,
    style
        STRING NOT NULL,
    CONSTRAINT tournament_id
        FOREIGN KEY (tournament_id)
        REFERENCES tournament (id)
);

CREATE TABLE IF NOT EXISTS tee (
    id
        SERIAL8 PRIMARY KEY,
    tee_name
        STRING NOT NULL,
    -- nr
    --     INT8 NOT NULL,
    CONSTRAINT course_id
        FOREIGN KEY (course_id) REFERENCES course (id)
);

CREATE TABLE IF NOT EXISTS hole (
    id
        SERIAL8 PRIMARY KEY,
    nr
        INT8 NOT NULL CHECK (strokes BETWEEN 1 AND 18),
    index
        INT8 NOT NULL CHECK (strokes BETWEEN 1 AND 18),
    strokes
        INT8 CHECK (strokes BETWEEN 1 AND 9),
    CONSTRAINT tee_id
        FOREIGN KEY (tee_id) REFERENCES tee (id)
);

-- TODO - Create a simple populated DB to use for testing

INSERT
INTO
    tournament (tournament_name)
VALUES
    ('Skjeberg Invitational 2022');

INSERT
INTO
    course (tournament_id, course_name)
VALUES
    (1, 'Borregaard', 'single'),
    (1, 'Onsoy', 'team'),
    (1, 'Gamle Fredrikstad', 'team'),
    (1, 'Skjeberg', 'single');


INSERT
INTO
    tee (course_id, tee_name)
VALUES
    (1, 'gul'),
    (1, 'rod'),
    (1, '34'),
    (1, '27');



-- Holes

INSERT
INTO
    hole (tee_id, strokes)
VALUES
    (1, 1),
    (1, 2);
