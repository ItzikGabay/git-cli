const filesystem = require("../../utils/filesystem");

/**
*  COMMAND:
* $ gcl readLocal [key]
*
**/
module.exports = (program) => {

   program
      .command('readLocal')
      .argument('<key>')
      .action((key) => {
         filesystem.readLocal(key)
      });
}