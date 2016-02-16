'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
//use tmp for gitignore files
const mongoose = require('mongoose');

const routes = require('./routes/');

const PORT = process.env.PORT || 3000;

const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'stock-portfolio';

const MONGODB_URL_PREFIX = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';

const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
//ternary operator
mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});

app.set('view engine', 'jade');
//to be able to use jade
app.locals.title = 'Stock Market App';
//now used throughout using jade {title}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//see bodyparser docs https://github.com/expressjs/body-parser
//ensures it is parsed through express
app.use(routes);
//this page can now use routes


app.get('/', (req, res) => {
  db.collection('marketValue').findOne({}, {sort: {_id: -1}}, (err, doc) => {
    if (err) throw err;

    res.render('index', {
      date: new Date(),
      marketValue: doc.top[0]
    });
  });
});
//portfolio

















