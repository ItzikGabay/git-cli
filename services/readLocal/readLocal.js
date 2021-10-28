const filesystem = require("../../utils/filesystem");

/**
*  COMMAND:
* $ gcl readLocal [key]
*
**/
module.exports = (program) => {

   program
      .command('read')
      .description('Read local variable')
      .argument('<key>')
      .action((key) => {
         filesystem.readLocal(key)
      });
}