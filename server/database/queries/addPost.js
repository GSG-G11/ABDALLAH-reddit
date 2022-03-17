const connection = require('../config/connection');

const addPost = ({ id, postContent }) => connection.query({
  text: 'INSERT INTO posts (user_id, posts_content) VALUES ($1,$2);',
  values: [id, postContent],
});

module.exports = addPost;
