CREATE TABLE IF NOT EXISTS scorecard (
    id
        SERIAL PRIMARY KEY,
    location
        TEXT NOT NULL,
    golfer
        TEXT NOT NULL,
    updated_at
        TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS hole (
    scorecardid
        INT,
    strokes
        INT NOT NULL CHECK (strokes BETWEEN 1 AND 9),
    CONSTRAINT fk_hole
        FOREIGN KEY (scorecardid)
        REFERENCES scorecard (id)
        ON DELETE CASCADE
);
