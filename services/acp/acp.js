const App = require('../../utils/functions');
const { exec } = require("child_process");
const inquirer = require('inquirer');
const acpController = require('./acp.controller');

/**
 *  COMMAND:
 * $ gcl acp [origin] [branch] [message]
 *
**/
module.exports = (program) => {
   program
      .command('acp')
      .argument('<origin>')
      .argument('<branch>')
      .argument('<message...>', 'values to be summed')
      .action((origin, branch, message) => {
         acpController(origin, branch, message)
      });
}
