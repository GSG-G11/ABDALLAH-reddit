const { compare } = require('bcrypt');
const checkUserName = require('../database/queries/checkUserName');
const jwtSignIn = require('../utils/jwtSignIn');
const signInValidation = require('../utils/validation/signInValidation');

const signInController = (req, res) => {
  const { userName, password } = req.body;

  signInValidation(req.body)
    .then((data) => checkUserName(data))
    .then((data) => {
      if (data.rowCount === 0) {
        throw new Error('email is not found !!');
      }
      return data;
    })
    .then((data) => compare(password, data.rows[0].password))
    .then((result) => {
      if (result) {
        jwtSignIn(userName)
          .then((token) => {
            res.cookie('user', token).json({ message: 'logged in successfuly...' });
          })
          .catch(() => res.json({ message: 'token is faild !!!' }));
      } else {
        res.json({ message: 'wrong user name or password !!' });
      }
    })
    .catch((err) => res.status(400).json(err.message));
};
module.exports = signInController;
