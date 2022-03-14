const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.port || 5050);

module.exports = app;
