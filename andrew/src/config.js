const fs = require('fs');
const configPath = require('./program').config;

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

module.exports = config;
