const express = require('express');
const bodyParser = require('body-parser');
const config = require('./src/config');
const db = require('./src/db/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const rows = await db.query('SELECT * from posts');
    console.log(rows);
    res.render('pages/index'){
      posts,
    }
  }
  catch (error) {
    res.render('pages/erroe');
  }
});

// app.get('/', (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   // res.send('Hello World! 1');
//   res.render('pages/index');
// });
//
// app.post('/', (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   res.send('Hello World! 2');
// });
//
// app.patch('/', (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   res.send('Hello World! 3');
// });
//
// app.put('/', (req, res) => {
//   console.log(req.query);
//   console.log(req.body);
//   res.send('Hello World! 4');
// });

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}!`);
});
