CREATE TABLE users(
	user_id SERIAL CONSTRAINT increment_id PRIMARY KEY,
    email VARCHAR  NOT NULL, -- Constraints : Unique or null, not null if login feature required. Disregard if ! active
    passwrod VARCHAR NOT NULL,
    CONSTRAINT email_verification CHECK (email ~* '@')
);