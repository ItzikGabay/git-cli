const kpController = require('./kp.controller');

module.exports = kpCommand = (program) => {
   program
      .command('kp')
      .description('Kill port by ID')
      .action(() => kpController());
}