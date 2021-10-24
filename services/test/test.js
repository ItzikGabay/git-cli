const inquirer = require('inquirer');

module.exports = testCommand = (program) => {
   program
      .command('test')
      .action(() => {
         inquirer
            .prompt([
               {
                  type: 'confirm',
                  name: 'userConfirmed',
                  message: () => {
                     console.log('1');
                     console.log('2');
                  }
               },
            ])
            .then(answers => {
               console.info('Answer:', answers.userConfirmed);
            });
      });
}