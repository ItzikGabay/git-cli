const fsPromise = require('fs').promises;

let myOptions = {
  name3: 'cli-git3',
  projectorigin: 'https://github.com'
};
const fileName = './cli.conf.json';


async function readLocal(key) {
  console.log('readLocal:', key);
  let dataInConfigFile = await fsPromise.readFile(fileName)
  dataInConfigFile = JSON.parse(dataInConfigFile)

  if (!dataInConfigFile[key]) {
    return console.log('This key is not exist.')
  } else {
    console.log(dataInConfigFile[key]);
  }
}

/**
 * write to config file
 *
 * @see https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * @param {Object} dataToWrite the object you are writing to the config file.
 */
async function writeFile(dataToWrite) {
  // name of config file we reading and writing.

  // read the file - async function
  let dataInConfigFile = await fsPromise.readFile(fileName)

  // parse from buffer response to JSON data.
  dataInConfigFile = JSON.parse(dataInConfigFile);

  // combine new data with existing data user want to write to config file.
  let combinedData = { ...dataInConfigFile, ...dataToWrite }

  // parse back to stringify version.
  combinedData = JSON.stringify(combinedData);

  // write to file.
  let errorFoundWhileWrite = await fsPromise.writeFile(fileName, combinedData)

  // Returns: <Promise> Fulfills with undefined upon success.
  if (!errorFoundWhileWrite) {
    console.log(`Done successfully writing in ${fileName}!`);
    return;
  } else {
    console.log('There has been an error parsing your JSON.')
    console.log(errorFoundWhileWrite);
    return errorFoundWhileWrite;
  }
}

module.exports = {
  writeFile,
  readLocal
}