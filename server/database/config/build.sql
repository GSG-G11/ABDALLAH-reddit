BEGIN;

DROP TABLE IF EXISTS users , posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT,
  posts_content TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (user_name,email,password) VALUES ('admin','admin@gmail.com','$2a$10$urn5eKcywoWsV1pXS9Dp/.KMwkv6PjZd1nBD7JrhIZhvFiDCgMly.');
INSERT INTO posts (posts_content) VALUES ('this is the first post this is the first post');
