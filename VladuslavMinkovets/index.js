const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/index');
const config = require('./src/config');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const posts = await db.query('SELECT * from posts');
    console.log(posts);

    res.render('pages/index/index', {
      posts,
    });
  } catch (error) {
    console.error(error);
    res.render('pages/error');
  }
});
app.get('/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const [post] = await db.query('SELECT * from posts WHERE id=?', id);
    const comments = await db.query('SELECT * from comments WHERE post_id=?', id);

    res.render('pages/post/post', {
      post,
      comments,
    });
  } catch (error) {
    console.error(error);
    res.render('pages/error');
  }
});

app.listen(config.server.port, () => {
  console.log(`App listening on port ${config.server.port}!`);
});
