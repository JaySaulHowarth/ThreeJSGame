const hash = require('bcrypt');
const path = require('path');
const http = require('http');
const app = require('./config/express')();

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});