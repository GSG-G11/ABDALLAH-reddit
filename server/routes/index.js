const router = require('express').Router();
const signUpController = require('../controllers/signUpController');
const signInController = require('../controllers/signInController');

router.post('/signup', signUpController);
router.post('/signin', signInController);
module.exports = router;
