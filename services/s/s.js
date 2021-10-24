const sController = require('./s.controller');
module.exports = sCommand = (program) => {
   program
      .command('s')
      .action(() => sController());
}