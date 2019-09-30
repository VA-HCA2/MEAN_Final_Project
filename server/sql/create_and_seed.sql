-- drop database hca;
create database hca;
use hca;

create table USERS (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	NAME 	    varchar(255) NOT NULL,
    PASSWORD 	varchar(255) NOT NULL,  
    email      varchar(255) NOT NULL UNIQUE, 	
	is_admin	smallint(1) NOT NULL DEFAULT 0,
	createdAt   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (NAME),
	PRIMARY KEY(ID)
);

insert into USERS (NAME, PASSWORD, email, is_admin) values ('Test', '132456', 'test@yahoo.com', 1);
insert into USERS (NAME, PASSWORD, email, is_admin) values ('Paulina', '1234', 'alejarce12@yahoo.com', 0);
insert into USERS (NAME, PASSWORD, email, is_admin) values ('Maria', '11111111','maria_arce90@yahoo.com', 1);
insert into USERS (NAME, PASSWORD, email, is_admin) values ('Sonia', '1245645', 'sonia@yahoo.com', 0);

select * from users;