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

CREATE TABLE news(
    news_id SERIAL PRIMARY KEY,
    info text,
    date_added DATE DEFAULT CURRENT_DATE,
    importance int
);

insert into news(info, importance) VALUES ('FAKE NEWS', 10)

CREATE TABLE EditorEntries(
    entry_id SERIAL PRIMARY KEY,
    content         json not null,
    last_modified   datetime,
    target_page     varchar
);
