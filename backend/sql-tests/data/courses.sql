--
-- - Create the courses
--
INSERT INTO physical.course (name, course_rating, slope, nr_holes)
    VALUES ('Skjeberg', 70.7, 130, 18), -- From 55
    ('Onsoy', 72.7, 136, 18), -- Tee 59
    ('Gamle Fredrikstad', 72.8, 145, 18), -- Tee 59
    ('Borregaard', 64.4, 130, 18) -- Mens 43
;

--
-- Add the courses we are playing to the tournament
--
INSERT INTO physical.tournament_course (tournament_id, course_name)
    VALUES ((
            SELECT
                id
            FROM
                physical.tournament
            WHERE
                name LIKE 'Skjeberg%'), 'Skjeberg'), ((
        SELECT
            id
        FROM physical.tournament
        WHERE
            name LIKE 'Skjeberg%'), 'Borregaard');

--
--- Create the Courses
--
--- Create Borregaard
INSERT INTO physical.course_hole (course_name, hole_nr, par, hole_index)
    VALUES ('Borregaard', 1, 3, 3),
    ('Borregaard', 2, 3, 17),
    ('Borregaard', 3, 4, 7),
    ('Borregaard', 4, 3, 11),
    ('Borregaard', 5, 4, 5),
    ('Borregaard', 6, 3, 13),
    ('Borregaard', 7, 4, 1),
    ('Borregaard', 8, 4, 15),
    ('Borregaard', 9, 4, 9),
    ('Borregaard', 10, 3, 3),
    ('Borregaard', 11, 3, 16),
    ('Borregaard', 12, 4, 4),
    ('Borregaard', 13, 3, 14),
    ('Borregaard', 14, 4, 6),
    ('Borregaard', 15, 3, 12),
    ('Borregaard', 16, 5, 18),
    ('Borregaard', 17, 4, 10),
    ('Borregaard', 18, 4, 8);

