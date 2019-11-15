BEGIN TRANSACTION;

\i '/docker-entrypoint-initdb.d/tables.sql'
\i '/docker-entrypoint-initdb.d/insert.sql'

COMMIT;
