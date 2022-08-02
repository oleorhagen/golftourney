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
