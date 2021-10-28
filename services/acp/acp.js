const acpController = require('./acp.controller');

/**
 *  COMMAND:
 * $ gcl acp [origin] [branch] [message]
 *
**/
module.exports = (program) => {
   program
      .command('acp')
      .description('Add, commit, and push')
      .argument('<origin>')
      .argument('<branch>')
      .argument('<message...>', 'values to be summed')
      .action((origin, branch, message) => acpController(origin, branch, message));
}
