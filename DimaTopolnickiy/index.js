const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/index');
const config = require('./src/config');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const posts = await db.query('SELECT * from posts');
    console.log(posts);
<<<<<<< Updated upstream
<<<<<<< Updated upstream

    res.render('pages/index/index', {
=======
=======
>>>>>>> Stashed changes
    res.render('pages/index', {
>>>>>>> Stashed changes
      posts,
    });
  }
  catch (error) {
    res.render('pages/error');
  }
});

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}!`);
});
