-- Create the teams
INSERT INTO physical.scorer (id, name)
    VALUES (:team_hm_id, 'H&M'),
    (:team_jo_id, 'J&O');

-- Add to the teams
INSERT INTO physical.team
SELECT
    id
FROM
    physical.scorer
EXCEPT
SELECT
    id
FROM
    physical.scorer
    NATURAL JOIN physical.player;

-- Add the team members
--
-- H & M
INSERT INTO physical.team_member (player_id, team_id)
SELECT
    id,
    tid
FROM
    physical.scorer,
    (
        SELECT
            t.id AS tid,
            s.name AS tname
        FROM
            physical.team AS t
        NATURAL JOIN physical.scorer AS s
    WHERE
        s.name LIKE 'H&M')
WHERE
    name LIKE '%Hellerud'
    OR name LIKE '%Sollie';

-- J & O
INSERT INTO physical.team_member (player_id, team_id)
SELECT
    id,
    tid
FROM
    physical.scorer,
    (
        SELECT
            t.id AS tid,
            s.name AS tname
        FROM
            physical.team AS t
        NATURAL JOIN physical.scorer AS s
    WHERE
        s.name LIKE 'J&O')
WHERE
    name LIKE '%Orhagen'
    OR name LIKE '%Karling';

