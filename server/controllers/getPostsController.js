const getAllPosts = require('../database/queries/getAllPosts');

const getPostsController = (req, res) => {
  getAllPosts()
    .then((data) => {
      if (data.rowCount === 0) {
        throw new Error('No posts yet!!');
      } else {
        return data.rows;
      }
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err.message));
};

module.exports = getPostsController;
