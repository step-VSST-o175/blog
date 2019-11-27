const db = require('./src/db');

db.query('SELECT * from posts')
    .then((rows) => {
        console.log(rows);
        // return db.close();
    });
