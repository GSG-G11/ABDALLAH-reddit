const connection = require('../config/connection');

const deletePost = ({ id }) => connection.query({
  text: 'DELETE FROM posts WHERE id = ($1);',
  values: [id],
});
module.exports = deletePost;
