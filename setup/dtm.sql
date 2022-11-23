create database testbor;
\c testbor



create table users (
    user_id serial primary key,
    full_name varchar(64) not null,
    password text not null,
    gmail text not null ,
    created_at date default  CURRENT_DATE
);


create type result_type as enum('byudjet','kantrakt','tavsiya etilmadi');

create table result (
  result_id serial primary key,
  user_id int REFERENCES users(user_id) not null,
  institut_id int REFERENCES institut(institut_id) not null,
  fac_id int REFERENCES faculty(fac_id) not null,
  block1_score float not null,
  block2_score float not null,
  result_type result_type not null,
  created_at date DEFAULT CURRENT_DATE,
  status varchar DEFAULT('active')
);



create table fanlar (
    fan_id serial primary key,
    fan_name text not null
);



create table tests (
    test_id serial primary key,
    fan_id int references fanlar(fan_id),
    question text not null,
    variants text[] not null,
    answer text not null,
    score float not null
);



create table institut (
    institut_id serial primary key,
    institut_name text not null
);



CREATE TABLE faculty (
    fac_id serial primary key,
    fac_name varchar(60) not null,
    institut_id int references institut(institut_id),
    block1 int references fanlar(fan_id) not null,
    block2 int references fanlar(fan_id) not null,
    grands int not null,
    grand_score int not null,
    contracts int not null,
    contract_score int not null,
    created_at date DEFAULT CURRENT_DATE,
    status varchar DEFAULT('active')
);

