const inquirer = require('inquirer');
const { exec } = require("child_process");
const rController = require('./r.controller');

module.exports = rCommand = (program) => {
   program
      .command('r')
      .description('Git remotes')
      .action(() => rController());
}