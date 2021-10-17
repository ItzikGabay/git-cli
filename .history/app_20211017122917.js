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
 *  @param {String} origin Repo origin name
 *  @param {String} branch Repo branch name
 *  @param {String} origin Commit message
**/
function commitingUI(origin, branch, message) {
   console.log('Commiting to github...')
   console.log(`ORIGIN: ${origin}`)
   console.log(`BRANCH: ${branch}`)
   console.log(`MESSAGE: ${message}`)
   console.log(`Executing..`)
}

const gitCommands = {
   commit: "git commit -m",
   add: 'git add .',
   push: 'git push'
}

/**
 *  Parsing array of series of commands.
 *  for exp: ['git add .', 'git push -m", "test"] 
 *  to -> 'git add . && git push -m "CLI Deploy" && test' String
 *
 *  @param {Array} arr The array of commands
 *  @param {String} origin Origin name
 *  @param {String} branch Branch name
 *  @param {String} message Meesage of commit
 *  @return {String} - Full command as string
**/
function parseArrToSingleCommand(arr, origin, branch, message) {
   let fullCommand = ""
   for (let [index, cmd] of arr.entries()) {
      let args = cmd;
      args = cmd.split(' ')[1]
      if (args === "commit") {
         cmd = `${cmd} "${message}"`
      }
      if (args === "push") {
         cmd = `${cmd} ${origin} ${branch}`
      }

      if (index !== arr.length - 1) {
         fullCommand += cmd + " && ";
      } else {
         fullCommand += cmd

      }
      return fullCommand;
   }
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
