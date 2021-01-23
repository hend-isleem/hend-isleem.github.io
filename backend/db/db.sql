CREATE TABLE books (
  ID SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);

INSERT INTO books (author, title)
VALUES  ('J.K. Rowling', 'Harry Potter');

/*
create database vir_db;


create table test(
    test_id serial primary key,
    test_name varchar(15)
);

create table student(
	s_name 		 varchar(15) primary key,
	full_name    text not null,
	paswd 		 varchar not null,
	email 		 text unique ,
	city		 text,
	image		 bytea,
	major 		 text,
	gender 		 varchar(6)
);

create table company(
	c_name 		 varchar(15) primary key,
	company_name text not null,
	paswd 		 varchar not null,
	email 		 text unique ,
	city		 text,
	icon		 bytea,
	about 		 text not null,
	url			 text,
	video		 text
);

create table job_listing(
	listing_id	 varchar,
	c_name 		 varchar(15) references company(c_name) on delete CASCADE ON UPDATE CASCADE,
	enabled		 boolean default true,
	title 		 text not null,
	description	 text,
	count 		 int default 1,	
	salary_range double precision,
	primary key(listing_id, c_name),
	p_f_time text check (p_f_time in ('part time', 'full time'))
);

create table "degree"( degreeName text primary key);
create table skill(skill_name text, primary key(skill_name));

create sequence level_seq start 1 ;
create table "level"( level_num int default nextval('level_seq'), primary key(level_num));

create table needs(
	listing_id	 varchar,
	c_name 		 varchar(15),
	skill_name   text references skill ON UPDATE CASCADE,
	level_num 	 int references "level"(level_num) ON UPDATE CASCADE,
	primary key(listing_id, c_name, skill_name),
	FOREIGN KEY (listing_id, c_name) REFERENCES job_listing (listing_id, c_name) on delete CASCADE ON UPDATE CASCADE 
);


create table qualified_in(
	s_name 	varchar(15) references student(s_name) on delete CASCADE ON UPDATE CASCADE ,
	skill_name   text references skill ON UPDATE CASCADE ,
	level_num 	 int references "level"(level_num) ON UPDATE CASCADE,
	primary key(skill_name,s_name)
);

create table "views"(
	s_name 	varchar(15) references student(s_name),
	listing_id	 varchar,
	c_name 		 varchar(15),
	count int default 0,
	primary key(listing_id,c_name, s_name),
	FOREIGN KEY (listing_id, c_name) REFERENCES job_listing (listing_id, c_name) on delete CASCADE ON UPDATE CASCADE 
);

CREATE SEQUENCE app_seq START 1;

create table application(
	app_id	     varchar default nextval('app_seq') ,
	listing_id	 varchar,
	c_name 		 varchar(15),
	app_date 	 date  default current_date,
	extra_info	 text,
	status 		 text,
	primary key(app_id, c_name, listing_id),
	FOREIGN KEY (listing_id, c_name) REFERENCES job_listing (listing_id, c_name) on delete CASCADE ON UPDATE CASCADE
);

create table fills(
	listing_id	 varchar,
	c_name 		 varchar(15),
	s_name 	 	 varchar(15) references student(s_name) on delete cascade on update cascade ,
	app_id	     varchar,
	primary key (app_id, c_name, listing_id),
	FOREIGN KEY (app_id,  c_name, listing_id) REFERENCES application (app_id, c_name, listing_id) on delete CASCADE ON UPDATE CASCADE
);
create table notification(
	n_id serial,
	listing_id	 varchar,
	c_name 		 varchar(15),
	s_name 	 	 varchar(15) references student(s_name) on delete cascade on update cascade,
	app_id	     varchar ,
	message 	 text not null,
	isRead		 boolean,
	primary key(n_id, listing_id, c_name, s_name, app_id),
	FOREIGN KEY (app_id, c_name, listing_id) REFERENCES fills (app_id, c_name, listing_id) on delete CASCADE ON UPDATE cascade
);


create sequence edu_seq start 1 ;
create table educational_details(
	s_name 	   varchar(15) references student(s_name) on delete CASCADE ON UPDATE CASCADE ,
	detail_id  varchar default nextval('edu_seq'),
	university text,
	year_of_passing  numeric(4) not null,
	general_grade	 varchar(2),
	degreeName 		 text references "degree" not null,
	description 	 text,
	primary key(detail_id, s_name)
);

CREATE SEQUENCE work_seq START 1;
create table work_experience(
	s_name 	    varchar(15) references student(s_name) on delete CASCADE ON UPDATE CASCADE ,
	work_id     varchar default nextval('work_seq'),
	job_title   text not null,
	description text,
	duration 	text,
	primary key(work_id, s_name)
);
CREATE SEQUENCE project_seq START 1;
create table project(
	s_name 	 	varchar(15) references student(s_name) on delete CASCADE ON UPDATE CASCADE ,
	project_id  varchar default nextval('project_seq'),
	title text not null, 
	technologies text,
	description text,
	primary key(project_id, s_name)
);
*/