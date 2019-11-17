BEGIN TRANSACTION;

CREATE TABLE buckets
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    created TIMESTAMP DEFAULT now()
);


CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    status VARCHAR(15),
    bucket INT,
    created TIMESTAMP DEFAULT now(),
    FOREIGN KEY (bucket) REFERENCES buckets(id)
);

INSERT INTO buckets
    (name)
VALUES
    ('default');

COMMIT;
