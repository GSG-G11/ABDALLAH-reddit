const connection = require('../config/connection');

const checkEmail = ({ email }) => connection.query(
  'SELECT * FROM users WHERE email = $1;',
  [email],
);

module.exports = checkEmail;
