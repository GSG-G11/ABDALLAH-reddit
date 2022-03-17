const { hash } = require('bcrypt');
const checkUserName = require('../database/queries/checkUserName');
const checkEmail = require('../database/queries/checkEmail');
const signUpValidation = require('../utils/validation/signUpValidation');
const addUser = require('../database/queries/addUser');

const signUpController = (req, res) => {
  const { userName, email, password } = req.body;
  signUpValidation(req.body)
    .then((data) => checkUserName(data))
    .then((data) => {
      if (data.rowCount !== 0) {
        throw new Error('this user name is already taken');
      }
    })
    .then(() => checkEmail(req.body))
    .then((data) => {
      if (data.rowCount !== 0) {
        throw new Error('this email is already taken');
      }
    })
    .then(() => hash(password, 10))
    .then((hashedPassword) => addUser({ userName, email, hashedPassword }))
    .then((data) => res.json({ message: 'signed up successfuly...' }))
    .catch((err) => res.status(400).json(err.message));
};
module.exports = signUpController;
