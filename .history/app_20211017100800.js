// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();

function joinArrayToMessage() {
   
}

program
   .command('acp')
   .argument('<origin>')
   .argument('<branch>')
   .argument('<message...>', 'values to be summed')
   .action((total) => {
      // console.log(`sum is ${total}`);
      console.log()
   });

program.parse();