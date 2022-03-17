require('env2')('.env');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('port', process.env.port || 5550);
app.use(router);
module.exports = app;
