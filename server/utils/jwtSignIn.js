const jwt = require('jsonwebtoken');

const jwtSignIn = (userName) => new Promise((resolve, reject) => {
  jwt.sign(userName, process.env.PRIVATE_KEY, (err, token) => {
    if (err) {
      reject(err);
    }
    resolve(token);
  });
});

module.exports = jwtSignIn;
