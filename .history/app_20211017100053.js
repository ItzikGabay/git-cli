// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();

program
   .command('add')
   .argument('<first>', 'integer argument', '1')
   .argument('[second]', 'integer argument', myParseInt, '1')
   .action((first, second) => {
      console.log(`${first} + ${second} = ${first + second}`);
   });

program.parse();