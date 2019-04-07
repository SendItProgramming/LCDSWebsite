##UP
CREATE TYPE role_names AS ENUM('admin', 'teacher', 'parent');


CREATE TABLE roles(
	user_id int NOT NULL,
	role role_names NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(user_id)
);

##Down

DROP TYPE role_names;
DROP TABLE roles;