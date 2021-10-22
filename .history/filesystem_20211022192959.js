console.log('Started..');
// create function to read a file
const fs = require('fs');

let myOptions = {
  name: 'cli-git',
  projectorigin: 'https://github.com'
};

let data = JSON.stringify(myOptions);

writeFile(data)

function writeFile(data) {
  return fs.writeFile('./cli.conf.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
    console.log('Configuration saved successfully.')
  });
}


// create function to write a file