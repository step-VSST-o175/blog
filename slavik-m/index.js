const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/index');
const config = require('./src/config');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  db.query('SELECT * from posts')
    .then((rows) => {
      console.log(rows);
    });

  res.render('pages/index');
});

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}!`);
});
