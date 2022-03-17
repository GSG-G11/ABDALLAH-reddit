const router = require('express').Router();
const signUpController = require('../controllers/signUpController');
const signInController = require('../controllers/signInController');
const getPostsController = require('../controllers/getPostsController');

router.post('/signup', signUpController);
router.post('/signin', signInController);
router.get('/posts', getPostsController);
module.exports = router;
