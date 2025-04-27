--
-- - Create the players (Scorers) and the teams, and set up the memberships
--
INSERT INTO physical.scorer (id, name)
    VALUES (:oleo_id, 'Ole Petter Orhagen'),
    (:julius_id, 'Juliane Skuland Karling'),
    (:olem_id, 'Ole Martin Hellerud'),
    (:marius_id, 'Marius Sollie');

--
-- Add the players to the tournament
--
INSERT INTO physical.tournament_scorer (tournament_id, scorer_id)
    VALUES ((:tournament_id),
        (:oleo_id)),
    ((:tournament_id),
        (:julius_id)),
    ((:tournament_id),
        (:marius_id)),
    ((:tournament_id),
        (:olem_id));

--
-- Create the players, with their handicaps
--
INSERT INTO physical.player (id, handicap)
    VALUES ((:oleo_id), 24),
    ((:julius_id), 20),
    ((:marius_id), 37),
    ((:olem_id), 25);

