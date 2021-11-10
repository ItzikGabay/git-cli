const sController = require('./cm.controller');
module.exports = sCommand = (program) => {
   program
      .command('cm')
      .argument('<cmName>')
      .description('Create react/vue component folder')
      .action((cmName) => sController(cmName));
}