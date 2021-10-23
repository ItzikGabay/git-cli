module.exports = testCommand = (program) => {
   program
      .command('test')
      .action(() => {
         console.log('yay working!');
      });
}