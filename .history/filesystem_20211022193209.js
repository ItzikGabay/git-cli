console.log('Started..');
// create function to read a file
const fs = require('fs');

let myOptions = {
  name: 'cli-git',
  projectorigin: 'https://github.com'
};

let data = JSON.stringify(myOptions);

// writeFile(data)
writeFile()
readFile()

async function writeFile(data) {
  return fs.writeFile('./cli.conf.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
    console.log('Configuration saved successfully.')
  });
}

async function readFile() {
  let data = fs.readFileSync('./cli.conf.json'),
    myObj;

  try {
    myObj = JSON.parse(data);
    console.dir(myObj);
  }
  catch (err) {
    console.log('There has been an error parsing your JSON.')
    console.log(err);
  }
}


// create function to write a file