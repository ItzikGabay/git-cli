console.log('## GIT-CLI Version 1.0.0 - init...');
// create function to read a file
const fsPromise = require('fs').promises;

let myOptions = {
  name3: 'cli-git3',
  projectorigin: 'https://github.com'
};

writeFile(myOptions)


/**
 * write to config file
 *
 * @see https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * @param {Object} dataToWrite the object you are writing to the config file.
 */
async function writeFile(dataToWrite) {
  // name of config file we reading and writing.
  let fileName = './cli.conf.json';

  // read the file with async order
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
  } else {
    console.log('There has been an error parsing your JSON.')
    console.log(errorFoundWhileWrite);
  }
}