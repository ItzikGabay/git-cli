const inquirer = require('inquirer');
const { exec } = require("child_process");

module.exports = () => {
   exec('lsof -n -i TCP:8080,3000,3001,4000,5000', (error, stdout, stderr) => {
      if (error.signal === null) return console.error('Everything clear in 8080, 3000, 3001, 4000, 5000 ports!');
      if (error) return console.error(error);
      inquirer
         .prompt([
            {
               type: 'number',
               name: 'port_num',
               message: () => {
                  console.log(stdout);
                  return 'Which PID number your want to kill?';
               }
            },
         ])
         .then(answers => {
            if (!answers.port_num) {
               console.log(`"${answers.port_num}" is not valid answer. operation canceled. try again.`);
               return;
            } else {
               exec(`kill -9 ${answers.port_num}`, (error, stdout, stderr) => {
                  if (error) return console.error(error);
                  console.log(stdout);
                  console.log('Operation completed.');
               });
            }
         });
   })
}
