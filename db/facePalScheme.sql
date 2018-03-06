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

use facepal;

insert into transactions( send_to, amount, CustomerId, createdAt, updatedAt) values('1', 100, 1, now(), now());

insert into transactions( receive_from, amount, CustomerId, createdAt, updatedAt) values('2', 200, 1, now(), now());

select * from transactions;