
CREATE USER ayanrocks;
CREATE DATABASE todoApi;
GRANT ALL PRIVILEGES ON DATABASE todoApi TO ayanrocks;

BEGIN TRANSACTION;
\i '/docker-entrypoint-initdb.d/tables.sql'

COMMIT;
