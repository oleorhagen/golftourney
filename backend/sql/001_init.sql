CREATE TABLE IF NOT EXISTS scorecard (
    id
        SERIAL PRIMARY KEY,
    location
        TEXT NOT NULL,
    golfer
        TEXT NOT NULL,
    updated_at
        TIMESTAMP DEFAULT now(),
    hole1 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole2 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole3 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole4 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole5 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole6 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole7 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole8 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole9 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole10 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole11 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole12 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole13 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole14 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole15 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole16 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole17 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    hole18 INT NOT NULL CHECK (strokes BETWEEN 1 AND 9)

);

-- CREATE TABLE IF NOT EXISTS hole (
--     scorecardid
--         INT,
--     strokes
--         INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
--     CONSTRAINT fk_hole
--         FOREIGN KEY (scorecardid)
--         REFERENCES scorecard (id)
--         ON DELETE CASCADE
-- );
