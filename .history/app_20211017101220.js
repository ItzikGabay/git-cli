// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();

function parseArrToMessage(arr) {
   arr = arr.join(' ')
   arr = arr + '"'
   arr = '"' + arr;
   return arr;
}

program
   .command('acp')
   .argument('<origin>')
   .argument('<branch>')
   .argument('<message...>', 'values to be summed')
   .action((origin, branch, message) => {
      parseArrToMessage(message)
      console.log('Commiting to github...')
      console.log(`ORIGIN: ${origin}`)
      console.log(`BRANCH: ${origin}`)
      console.log(`BRANCH: ${origin}`)
   });

program.parse();