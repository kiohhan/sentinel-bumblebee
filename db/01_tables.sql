CREATE TABLE IF NOT EXISTS objects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    fields JSON,
    workflows JSON
);