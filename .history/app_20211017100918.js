// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();

function joinArrayToMessage(arr) {
   return arr.join(' ')
}

program
   .command('acp')
   .argument('<origin>')
   .argument('<branch>')
   .argument('<message...>', 'values to be summed')
   .action((origin, branch, message) => {
      // console.log(`sum is ${total}`);
      console.log(total);
      // console.log(joinArrayToMessage(total));
   });

program.parse();