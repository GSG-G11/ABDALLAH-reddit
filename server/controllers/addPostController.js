const addPost = require('../database/queries/addPost');

const addPostController = (req, res) => {
  addPost(req.body)
    .then(() => res.json({ message: 'post added successfuly!!' }))
    .catch((err) => res.json(err.message));
};

module.exports = addPostController;
