##Run this command to get the DB UP

CREATE TABLE news(
	news_id SERIAL CONSTRAINT increment_news_id PRIMARY KEY,
    date_added TIMESTAMP WITH TIME ZONE NOT NULL, -- Constraints : Unique or null, not null if login feature required. Disregard if ! active
    news_text TEXT NOT NULL,
    show BOOLEAN DEFAULT true
);

##Run this command to get the DB down


DROP TABLE news;