#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
const { exec } = require("child_process");

/**
 * helpers functions
 */

/**
*  Parse the user input into message.
*
*  @param {Array} arr The array you want to parse
*  @return {Array} parsed array
**/
function parseArrToMessage(arr) {
   arr = arr.join(' ')
   arr = arr + '"'
   arr = '"' + arr;
   return arr;
}

/**
*  Parse array into one string of commands with " && "
*
*  @param {Array} arr The array you want to parse
*  @return {Array} parsed array
**/
function parseArgsToShellCommand(arr) {
   arr = arr.join(' && ')
   return arr;
}

// $ gcl acp [origin] [branch] [message]
program
   .command('acp')
   .argument('<origin>')
   .argument('<branch>')
   .argument('<message...>', 'values to be summed')
   .action((origin, branch, message) => {
      message = parseArrToMessage(message);

      exec(`git add . && git commit -m ${message} && git push ${origin} ${branch}`, (error, stdout, stderr) => {
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

      console.log('Commiting to github...')
      console.log(`ORIGIN: ${origin}`)
      console.log(`BRANCH: ${branch}`)
      console.log(`MESSAGE: ${message}`)
      console.log(`Executing..`)
   });

program.parse();


/**
 * TODO:
 * create gitignore file
 * push to heroku / other platforms by --heroku
 */