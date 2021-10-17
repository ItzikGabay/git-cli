// const commander = require('../'); // include commander in git clone of commander repo
const commander = require('commander'); // (normal include)
const program = new commander.Command();
const { exec } = require("child_process");

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
      message = parseArrToMessage(message);

      exec(`git add . && git commit -m ${message}`, (error, stdout, stderr) => {
         if (error) {
            console.log(`error: ${error.message}`);
            return;
         }
         if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
         }
         console.log(`stdout: ${stdout}`);
      });

      console.log('Commiting to github...')
      console.log(`ORIGIN: ${origin}`)
      console.log(`BRANCH: ${branch}`)
      console.log(`MESSAGE: ${message}`)
   });

program.parse();