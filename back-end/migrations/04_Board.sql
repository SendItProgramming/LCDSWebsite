CREATE TABLE BoardMembers(
	member_id SERIAL PRIMARY KEY,
    member_first_name varchar,
    member_last_initial varchar,
    member_position varchar,
    member_importance int,
    member_active boolean
);

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Jeremy', 'B', 'Board President', 1,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Kristy', 'M', 'Vice President',2,'t' );

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Jamal', 'B', 'Treasurer', 3,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Janelle', 'G', 'Secretary',4,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Andrea', 'S', 'Fundraising Chair',5,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Sonia', 'B', 'Fundraising Chair', 5,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Christy', 'S', 'Liaison', 6,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Laura', 'M', 'Bingo Coordinator', 7,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Melissa', 'C', 'Social Committee AM', 8,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES(NULL, NULL, 'Cleaning Coordinator', 9,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Melissa', 'C', 'Newsletter', 10,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Melissa', 'C', 'Social Committee AM', 11,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Amanda', 'W', 'Social Committee AM', 12,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Laura', 'M', 'Social Committee AM', 12,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Slava', 'Z', 'Social Committee PM', 13,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Stacey', 'B', 'Scheduling AM', 14,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES(NULL, NULL, 'Scheduling PM', 15,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Melissa', 'C', 'Yearbook AM', 16,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES(NULL, NULL, 'Yearbook PM', 17,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Amanda', 'Wa', 'Scholastic Coordinator', 18,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Kristi', 'M', 'Laundry/Paper & Bottle Recycling', 19,'t');


INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES(NULL, NULL, 'Maintenance/Storage & Set Up', 20,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Kristi', 'M', 'Gym Equipment Transport Committee AM & PM', 21,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Amanda', 'W', 'Gym Equipment Transport Committee AM & PM', 21,'t');

INSERT INTO BoardMembers(member_first_name, member_last_initial, member_position, member_importance, member_active)
VALUES('Marlon', 'G', 'Gym Equipment Transport Committee AM & PM', 21,'t');