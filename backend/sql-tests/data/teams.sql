-- Create the teams
INSERT INTO physical.scorer (id, name)
    VALUES (:team_hm_id, 'H&M'),
    (:team_jo_id, 'J&O');

-- Add to the teams
INSERT INTO physical.team
    VALUES (:team_hm_id),
    (:team_jo_id);

-- Add the team members
--
-- H & M
INSERT INTO physical.team_member (player_id, team_id)
    VALUES (:olem_id, :team_hm_id),
    (:marius_id, :team_hm_id);

-- J & O
INSERT INTO physical.team_member (player_id, team_id)
    VALUES (:julius_id, :team_jo_id),
    (:oleo_id, :team_jo_id);

