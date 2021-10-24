const App = require('../../utils/drivers');
const { exec } = require("child_process");
const inquirer = require('inquirer');

module.exports = (origin, branch, message) => {
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
            console.log('GIT-CLI Operation canceled.. You can try again.');
         }
      });
}