const deletePost = require('../database/queries/deletePost');

const deletePostController = (req, res) => {
  deletePost(req.body)
    .then(() => {
      res.json({ message: 'post deleted successfuly !!' });
    })
    .catch((err) => res.json(err.message));
};

module.exports = deletePostController;
