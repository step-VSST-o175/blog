const fs = require('fs');
const path = require('path');
const db = require('./index');

const SQL = fs.readFileSync(path.resolve(__dirname, './init.sql'), 'utf8');

db.query(SQL)
  .then((result) => {
    console.log(result);
    db.close();
  })
  .catch((error) => {
    console.error(error);
    return db.close();
  });
//222