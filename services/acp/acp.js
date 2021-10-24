const App = require('../../utils/functions');
const { exec } = require("child_process");
const inquirer = require('inquirer');

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

         inquirer
            .prompt([
               {
                  type: 'confirm',
                  name: 'userConfirmed',
                  message: () => {
                     message = App.parseMessageFromInput(message);
                     App.commitingUI(origin, branch, message)
                  }
               },
            ])
            .then(answers => {
               if (answers.userConfirmed) {
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
               } else {
                  console.log('Operation canceled');
               }
            });
      });
}
