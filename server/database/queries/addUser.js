const connection = require('../config/connection');

const addUser = (userName, email, hashedPassword) => connection.query({
  text: 'INSERT INTO users (user_name, email, password) VALUES ($1,$2,$3);',
  values: [userName, email, hashedPassword],
});

module.exports = addUser;
