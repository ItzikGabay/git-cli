// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();

program
   .command('add')
   .argument('<first>', 'integer argument', myParseInt)
   .argument('[second]', 'integer argument', myParseInt, 1000)
   .action((first, second) => {
      console.log(`${first} + ${second} = ${first + second}`);
   });