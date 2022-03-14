const router = require('express').Router();
const signUpController = require('../controllers/signUpController');

router.post('/signup', signUpController);
module.exports = router;
