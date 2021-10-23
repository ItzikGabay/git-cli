const App = require('../../utils/functions');
const { exec } = require("child_process");

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
         message = App.parseMessageFromInput(message);
         const commandsSeriesByOrder = ['git add .', 'git commit -m', 'git push']
         const commandToExec = App.parseArrToSingleCommand(commandsSeriesByOrder, origin, branch, message)

         exec(commandToExec, (error, stdout, stderr) => {
            if (error) {
               console.log(`GIT-CLI ERR: ${error.message}`);
               return;
            }
            if (stderr) {
               console.log(`GIT-CLI: ${stderr}`);
               return;
            }
            console.log(`GIT-CLI: ${stdout}`);
         });
         App.commitingUI(origin, branch, message)
      });
}