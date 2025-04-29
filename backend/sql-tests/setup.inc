
-- Test the database using pgtap:
-- https://pgtap.org/
CREATE EXTENSION IF NOT EXISTS pgtap;

-- \unset ECHO
-- \set QUIET 1
-- Turn off echo and keep things quiet.
-- Format the output for nice TAP.
\pset format unaligned
\pset tuples_only true
\pset pager off
-- Revert all changes on failure.
\set ON_ERROR_ROLLBACK 1
\set ON_ERROR_STOP true
-- BEGIN;

\set tournament_id '\'942b428e-2c9b-4f7a-9077-ea3cde99e184\''
-- Players IDs
\set oleo_id '\'626fa9fd-95ed-40e8-90f3-139ec79e79b9\''
\set julius_id '\'b885afc9-4f16-423a-b7cf-b880c99fa3f8\''
\set olem_id '\'fcca86fa-fdf3-4814-8c7e-ce9ea320dd08\''
\set marius_id '\'e66ac21a-36ff-441f-9102-755f3515416a\''
\set team_hm_id '\'94ee90bb-7660-4ca3-ad7e-34ade5131272\''
\set team_jo_id '\'94ee90bb-7660-4ca3-ad7e-34ade5131276\''

-- Basic setup

-- Tournament
\i backend/sql-tests/data/tournament.sql

-- Players and teams
\i backend/sql-tests/data/players.sql
\i backend/sql-tests/data/teams.sql

-- Courses and scorecards
\i backend/sql-tests/data/courses.sql
\i backend/sql-tests/data/scorecards.sql
