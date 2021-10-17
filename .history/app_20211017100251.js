// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();

program
   .command('sum')
   .argument('<value...>', 'values to be summed')
   .action((total) => {
      console.log(`sum is ${total}`);
   });

program.parse();