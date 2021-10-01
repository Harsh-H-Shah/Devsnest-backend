const express = require('express');
const app = express();
const body_parser = require('body-parser');
const checkAdmin = (req, res, next) => {
  if (req.query.auth === 'ohhmygod') {
    next();
  } else {
    res.status(401).send('Must be an admin');
  }
};
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

// app.use(checkAdmin);

const sendRes = (req, res) => {
  res.status(200);
  res.json(req.query);
};

app.get('/', sendRes);

app.get('/ab+cd', function (req, res) {
  res.send('ab+cd');
});

app.post('/', (req, res) => {
  console.log('req.body -> ', req.body);
  res.json({ text: req.body });
});

app.listen(5000);
