const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.send('Hello mate');
});

app.get('/hello', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/hello.txt'), 'namaste.txt');
});

app.get('/welcome', (req, res) => {
  res.render('index', { title: 'express' });
});

app.get('/cookie', (req, res) => {
  res
    .status(201)
    .cookie('token', 'test', {
      expire: new Date(Date.now + 10 * 60000),
    })
    .redirect(301, '/hello');
});

app.get('/flights/:from-:to', function (req, res) {
  res.send(req.params);
});

app.get('/about', function (req, res) {
  res.send('about');
});

app.listen(5000);
