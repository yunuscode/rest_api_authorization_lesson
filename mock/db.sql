-- CREATE DATABASE rest_api;

-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     user_name VARCHAR(32) NOT NULL,
--     user_email VARCHAR(32) NOT NULL UNIQUE,
--     user_password VARCHAR(64) NOT NULL
-- );

-- a@a.com toLowerCase
-- A@a.com

-- SELECT column_name_1, column_name_2, COUNT(*) FROM table_name;


-- SELECT * FROM users WHERE user_id IS NULL;

-- DELETE FROM users WHERE user_id = 1;

-- INSERT INTO table_name(column_name) VALUES ()

-- UPDATE table_name SET column_name=1 WHERE id=1;

-- sudo -u postgres psql

-- \l+, \c, \d+, 

CREATE TABLE table_name(
    column_name datatype options
);

CREATE DATABASE dbname;

DROP DATABASE db_name;

DROP TABLE table_name;

ALTER TABLE ADD COLUMN column_name ...;
ALTER TABLE ALTER COLUMN column_name ...;

-- ADD_STUDENT(name, age, class);


SELECT u.user_id, u.user_name FROM users u WHERE u.user_id = 1;

CREATE TYPE user_role AS ENUM ('user', 'admin');



CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_name VARCHAR(32) NOT NULL,
    user_username VARCHAR(16) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    user_role user_role DEFAULT 'user'
);

CREATE TABLE user_sessions(
    session_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_user_agent VARCHAR(56) NOT NULL,
    user_id UUID NOT NULL REFERENCES users(user_id)
);


SELECT * FROM user_sessions s 
JOIN users u ON s.user_id = u.user_id  
WHERE s.user_id = 'c2579523-d2ce-43b7-9439-851aea69c48b';

// hasMany, belongsTo

users has many sessions
sessions belongs to users













INSERT INTO users (user_name, user_email, user_password) VALUES ('myunus', 'myunus@gmail.com', 'password'); - ma'lumot qo'shish

INSERT INTO users (user_name, user_email, user_password) VALUES ('kimdir', 'kimdir@gmail.com', 'password'); 

SELECT user_name, user_email FROM users;
SELECT * FROM users WHERE user_id IS NOT NULL AND user_age = 20;

DELETE FROM users WHERE user_id = 1;

UPDATE users SET user_id = 5 WHERE user_id = 4;
