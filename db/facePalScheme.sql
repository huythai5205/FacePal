-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS FacePal;
-- Creates the "todolist" database --
CREATE DATABASE FacePal;



use FacePal;

CREATE TABLE `customers`(
);

INSERT customers(firstName, lastName, email, password, photo, DOB, createdAt, updatedAt) values( '1','1','1','1','1','1', curdate(),curdate());
INSERT customers(firstName, lastName, email, password, photo, DOB, createdAt, updatedAt) values( '2','2','2','2','2','2', curdate(),curdate());


select * from customers;

-- heroku login
-- Host	b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
-- Username	dtgo9kwg8iextfpk	
-- Password	ooem4c2m1dv64hwa