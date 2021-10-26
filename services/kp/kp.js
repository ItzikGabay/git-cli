const kpController = require('./kp.controller');

module.exports = kpCommand = (program) => {
   program
      .command('kp')
      .action(() => kpController());
}