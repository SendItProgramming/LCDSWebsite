CREATE TABLE users(
	user_id SERIAL CONSTRAINT increment_id PRIMARY KEY,
    email VARCHAR  NOT NULL, -- Constraints : Unique or null, not null if login feature required. Disregard if ! active
    password VARCHAR NOT NULL,
    CONSTRAINT email_verification CHECK (email ~* '@')
);
INSERT INTO users(email, password) VALUES ('admin@gmail.com', 'password');
CREATE TABLE quotes(
	quote_id SERIAL PRIMARY KEY,
    quote varchar,
    author varchar
);

CREATE TABLE EditorEntries(
    entry_id SERIAL PRIMARY KEY,
    content         varchar,
    last_modified   datetime,
    target_page     varchar
);