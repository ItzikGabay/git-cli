console.log('## GIT-CLI Version 1.0.0 - init...');
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

async function writeFile(dataToWrite) {

  console.log('Writing:', dataToWrite);


  let fileName = './cli.conf.json';
  let errorFoundWhileWrite = await fsPromise.writeFile(fileName, dataToWrite)
  // Returns: <Promise> Fulfills with undefined upon success.

  if (!errorFoundWhileWrite) {
    console.log(`Done successfully writing in ${fileName}!`);
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