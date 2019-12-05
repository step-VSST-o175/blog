const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/config');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.render('pages/index');
});

app.post('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send('Hello World! post');
});

app.patch('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send('Hello World! patch');
});

app.put('/', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.send('Hello World! put');
});

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}!`);
});
