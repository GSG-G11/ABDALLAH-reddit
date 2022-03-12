const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.port || 3030);

module.exports = app;
