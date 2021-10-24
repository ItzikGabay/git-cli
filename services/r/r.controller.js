const inquirer = require('inquirer');
const { exec } = require("child_process");

module.exports = rController = (program) => {
   exec('git remote -v', (error, stdout, stderr) => {
      if (error) {
         console.log(`GIT-CLI Error: ${error.message}`);
         return;
      }
      console.log(`GIT-CLI: \n${stdout}`);
   });
}