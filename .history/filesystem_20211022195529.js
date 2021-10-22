console.log('## GIT-CLI Version 1.0.0 - init...');
// create function to read a file
const fs = require('fs');
const fsPromise = require('fs').promises;

let myOptions = {
  name3: 'cli-git3',
  projectorigin: 'https://github.com'
};

let data = JSON.stringify(myOptions);

writeFile(myOptions)


/**
 * write to config file
 *
 *
 * @see https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * @param {String}
 */
async function writeFile(dataToWrite) {
  // name of config file we reading and writing.
  let fileName = './cli.conf.json';

  // read the file with Async fs Function
  let dataInConfigFile = await fsPromise.readFile(fileName)

  // parse from buffer response to JSON.
  dataInConfigFile = JSON.parse(dataInConfigFile);

  // combine new data with existing data
  let combinedData = { ...dataInConfigFile, ...dataToWrite }

  // parse back to stringify version
  combinedData = JSON.stringify(combinedData);

  // write to file
  let errorFoundWhileWrite = await fsPromise.writeFile(fileName, combinedData)

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