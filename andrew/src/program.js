const program = require('commander');
const path = require('path');

program.option('-c, --config <type>', 'path to config file', path.resolve(__dirname, '../config.json'));

program.parse(process.argv);

module.exports = program;
