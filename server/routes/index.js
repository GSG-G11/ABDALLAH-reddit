const router = require('express').Router();
const signUpController = require('../controllers/signUpController');
const signInController = require('../controllers/signInController');
const getPostsController = require('../controllers/getPostsController');
const addPostController = require('../controllers/addPostController');
const deletePostController = require('../controllers/deletePostController');

router.post('/signup', signUpController);
router.post('/signin', signInController);
router.get('/posts', getPostsController);
router.post('/newpost', addPostController);
router.post('/delpost', deletePostController);
module.exports = router;
