DROP TABLE staff;
CREATE TABLE staff
(
  staff_id SERIAL PRIMARY KEY,
  full_name varchar (255) NOT NULL,
  about varchar (1000) NOT NULL,
  title varchar (255),
  picture_url varchar(255)
);

INSERT INTO staff(full_name, about, title) VALUES('Michell Fung', 'I was born and raised here in Edmonton. I grew up in the north side of Edmonton and now currently live on the south side with my husband Neil and my cat and dog. I have two degrees. My first degree is in Psychology with a minor in Sociology. My second degree is in Elementary Education. I have worked with children in a various number of places such as the women’s shelter, YMCA day cares and have taught in a couple of Head Start programs. One of my hobbies is singing. I have sung in a mixed community choir for 6 years. Your children will learn many new songs and dances. I really love working with children and families. I love seeing the growth and development of all children.', 'teacher');
INSERT INTO staff(full_name, about, title) VALUES('Corina Muchetti', 'Ms. Corina is a former parent of LCDS. Her children have graduated from LCDS and are working their way through Elementary School. Ms. Corina works with children in the classroom who receive educational support services. Ms. Corina enjoys spending time with her husband and two children.', 'Educational Assistant');
INSERT INTO staff(full_name, about, title) VALUES('Sarah Quinton', 'Ms. Sarah joined LCDS in the fall of 2017. She has been a wonderful addition to our classroom. Ms. Sarah helps to create all of the wonderful projects and activities for our preschoolers in the classroom. In her spare time she participates in dance classes and fitness programs and enjoys travelling.', 'Ms. Sarah joined LCDS in the fall of 2017. She has been a wonderful addition to our classroom. Ms. Sarah helps to create all of the wonderful projects and activities for our preschoolers in the classroom. In her spare time she participates in dance classes and fitness programs and enjoys travelling.');
INSERT INTO staff(full_name, about, title) VALUES('Shannon Music', 'Miss Shannon is the LCDS Executive Director. Shannon is also a former LCDS parent and former Board Member. Miss Shannon has 3 children who graduated from LCDS and are now graduating from Post Secondary school and are starting their own lives. She enjoys spending time with her husband, and family and with her little West Highland Terrier named Ben.', 'Executive Director');
INSERT INTO staff(full_name, about, title) VALUES('Carmen Briggs','Miss Carmen is our Business Manager. Carmen is also a former LCDS parent and former Board member. Carmen enjoys spending time with her husband, two children and her little Yorkshire Terrier Mazey. Carmen''s two boys also graduated from LCDS and are now graduating from High School and attending Post Secondary School.','Business Manager');



