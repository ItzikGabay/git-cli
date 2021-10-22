console.log('Started..');
// create function to read a file
var fs = require('fs');

var myOptions = {
  name: 'cli-git',
  projectorigin: 'https://github.com'
};

var data = JSON.stringify(myOptions);

writeFile(data)

async function writeFile(data) {
  fs.writeFile('./cli.conf.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
    console.log('Configuration saved successfully.')
  });
  return null;
}


// create function to write a file