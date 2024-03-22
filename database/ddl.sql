DROP DATABASE IF EXISTS payflux;
CREATE DATABASE payflux;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

/* Creating a table  */
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_trade VARCHAR(100) NOT NULL,
    type_trade VARCHAR(3) NOT NULL CHECK (type_trade IN ('in', 'out')),
    amount NUMERIC NOT NULL,
    tag TEXT,
    date_trade TIMESTAMP WITHOUT TIME ZONE NOT NULL
);