const filesystem = require("../../utils/filesystem");

/**
*  COMMAND:
* $ gcl addLocal [key] [value]
*
**/
module.exports = (program) => {
   program
      .command('write')
      .description('Add local variable')
      .argument('<key>')
      .argument('<value>')
      .action((key, value) => {
         let result = {
            [key]: value
         }
         filesystem.writeFile(result)
      });
}