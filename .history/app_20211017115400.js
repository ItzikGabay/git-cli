#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
const { exec } = require("child_process");

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
*  Parse array into one string with " && "
*  between every command.
*  Mostly used for checking the user inputs and
*  by the results, we using array to push all the commands used needed.
*
*  @param {Array} arr The array you want to parse
*  @return {Array} parsed array
**/
function parseArgsToShellCommand(arr) {
   arr = arr.join(' && ')
   return arr;
}

/**
 *  Console UI for showing user inputs.
 *
 *  @return {<Promise>} - The array of 
**/
function commitingUI(origin, branch, message) {
   console.log('Commiting to github...')
   console.log(`ORIGIN: ${origin}`)
   console.log(`BRANCH: ${branch}`)
   console.log(`MESSAGE: ${message}`)
   console.log(`Executing..`)
}


/**
 *  COMMAND:
 * $ gcl acp [origin] [branch] [message]
 *
**/
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
      commitingUI(origin, branch, message)
   });

program.parse();


/**
 * TODO:
 * create gitignore file
 * push to heroku / other platforms by --heroku
 */