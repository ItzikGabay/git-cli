program
   .command('add')
   .argument('<first>', 'integer argument', myParseInt)
   .argument('[second]', 'integer argument', myParseInt, 1000)
   .action((first, second) => {
      console.log(`${first} + ${second} = ${first + second}`);
   });