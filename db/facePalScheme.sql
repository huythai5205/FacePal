-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS FacePal;
-- Creates the "todolist" database --
CREATE DATABASE FacePal;



use FacePal;

CREATE TABLE `customers`(
);

INSERT customers(firstName, lastName, email, password, photo, DOB, createdAt, updatedAt, availableFunds) values( '1','1','1','1','1','1', curdate(),curdate(), 1000);
INSERT customers(firstName, lastName, email, password, photo, DOB, createdAt, updatedAt, availableFunds) values( '2','2','2','2','2','2', curdate(),curdate(), 1000);

UPDATE customers SET availableFunds = 1000 where id=1;
UPDATE customers SET availableFunds = 1000 where id=2;


select * from customers;

use facepal;

insert into transactions( sender, amount, CustomerId, createdAt, updatedAt) values('1', 100, 1, now(), now());

insert into transactions( receiver, amount, CustomerId, createdAt, updatedAt) values('2', 200, 1, now(), now());

select * from transactions;