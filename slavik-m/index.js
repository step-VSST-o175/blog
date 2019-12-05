const express = require('express');
const config = require('./src/config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}!`);
});
