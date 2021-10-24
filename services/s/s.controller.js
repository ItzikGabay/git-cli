const { exec } = require("child_process");

module.exports = sController = () => {
   exec('git status', (error, stdout, stderr) => {
      if (error) {
         console.log(error.message);
         return;
      }
      console.log(stdout);
      return;
   })
}