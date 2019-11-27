const mysql = require('mysql');
const { database } = require('../config.js');

class Database {
  constructor (config) {
    this.connection = mysql.createConnection(config);
  }

  query (sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      });
    });
  }

  close () {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) return reject(err);
        return resolve();
      });
    });
  }
}

module.exports = new Database(database);
