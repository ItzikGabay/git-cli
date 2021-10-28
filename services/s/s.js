const sController = require('./s.controller');
module.exports = sCommand = (program) => {
   program
      .command('s')
      .description('Git status')
      .action(() => sController());
}