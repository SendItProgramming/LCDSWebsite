DROP TABLE Events;

CREATE TABLE events(
	event_id SERIAL CONSTRAINT increment_event_id PRIMARY KEY,
	title VARCHAR(80) NOT NULL,
	start_date TIMESTAMPTZ NOT NULL,
	end_date TIMESTAMPTZ,
	url VARCHAR,
	event_location VARCHAR,
	description VARCHAR
);

INSERT INTO public.events(
	event_id, title, start_date, end_date, url, event_location, description)
	VALUES (default,'Sunnys bender', '2019-03-24 19:00:00-7', '2019-03-26 03:00:00-7', default, default, 'party like its daylight savings time');
	
	INSERT INTO public.events(
	event_id, title, start_date, end_date, url, event_location, description)
	VALUES (default,'Bretts bat-mitzvah', '2019-03-27 19:00:00-7', '2019-03-27 21:00:00-7', default, default, 'Come watch Brett transform from a girl to a woman!');
	
	INSERT INTO public.events(
	event_id, title, start_date, end_date, url, event_location, description)
	VALUES (default,'Package party', '2019-03-23 00:00:00-7', '2019-03-24 00:00:00-7', default, 'Maxs house', 'Mr. Package has a big gift for all of us!');