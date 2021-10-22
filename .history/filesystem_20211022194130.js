console.log('Started..');
// create function to read a file
const fs = require('fs');
const fsPromise = require('fs').promises;

let myOptions = {
  name: 'cli-git',
  projectorigin: 'https://github.com'
};

let data = JSON.stringify(myOptions);

// writeFile(data)
writeFile(data)
// readFile()

async function writeFile(data) {
  let writeAction = await fsPromise.writeFile('./cli.conf.json', data)
  // @see Returns: <Promise> Fulfills with undefined upon success.
  if (!writeAction) {

  }
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