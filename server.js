'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
//use tmp for gitignore files
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;


mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});

app.locals.title = 'Stock Market App';
//now used throughout using jade {title}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//see bodyparser docs https://github.com/expressjs/body-parser
//ensures it is parsed through express
