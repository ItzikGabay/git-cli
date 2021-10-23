#!/usr/bin/env node

const App = require('../utils/functions');
const commander = require('commander');
const program = new commander.Command();
const { exec } = require("child_process");
const filesystem = require("../utils/filesystem");
const loadServices = require("../services/index");

// load the services of the CLI
loadServices(program)

// /**
//  *  COMMAND:
//  * $ gcl acp [origin] [branch] [message]
//  *
// **/
// program
//    .command('acp')
//    .argument('<origin>')
//    .argument('<branch>')
//    .argument('<message...>', 'values to be summed')
//    .action((origin, branch, message) => {
//       message = App.parseMessageFromInput(message);
//       const commandsSeriesByOrder = ['git add .', 'git commit -m', 'git push']
//       const commandToExec = App.parseArrToSingleCommand(commandsSeriesByOrder, origin, branch, message)

//       exec(commandToExec, (error, stdout, stderr) => {
//          if (error) {
//             console.log(`GIT-CLI ERR: ${error.message}`);
//             return;
//          }
//          if (stderr) {
//             console.log(`GIT-CLI: ${stderr}`);
//             return;
//          }
//          console.log(`GIT-CLI: ${stdout}`);
//       });
//       App.commitingUI(origin, branch, message)
//    });


/**
*  COMMAND:
* $ gcl addLocal [key] [value]
*
**/
program
   .command('addLocal')
   .argument('<key>')
   .argument('<value>')
   .action((key, value) => {
      let result = {
         [key]: value
      }
      filesystem.writeFile(result)
   });

/**
*  COMMAND:
* $ gcl readLocal [key]
*
**/
program
   .command('readLocal')
   .argument('<key>')
   .action((key) => {
      filesystem.readLocal(key)
   });

program.parse();
