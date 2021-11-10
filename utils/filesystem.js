const fsPromise = require('fs').promises;
const { appendFile } = require('fs').promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// let testData = {
//   name3: 'cli-git3',
//   projectorigin: 'https://github.com'
// };

const fileName = './cli.conf.json';


/**
 * read from the config file.
 *
 * @see https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * @param {String} key key that you want to search in config.
 */
async function readLocal(key) {
  let dataInConfigFile = await fsPromise.readFile(fileName)
  dataInConfigFile = JSON.parse(dataInConfigFile)

  if (!dataInConfigFile[key]) {
    return console.log('This key is not exist.')
  } else {
    console.log(dataInConfigFile[key]);
    return dataInConfigFile[key];
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


/**
 *  Creating folder by providing a name.
 *
 *  @param {String} folderName The name of folder to create.
**/
const createFolderByName = async (componentName) => {
  try {
    const { stdout, stderr } = await exec(`mkdir src/components/${componentName}`);
    if (stdout) console.log(stdout)
    if (stderr) console.log(stderr)
    console.log('Successfuly created folder.');
  } catch (e) {
    console.error('CLI Error: ', e.stderr); // should contain vcode (exit code) and signal (that caused the termination).
  }
}

/**
 *  Creating *React JSX component file.
 *
 *  @param {String} fileName The name of file to create.
**/
const createReactJsxComponent = async (componentName) => {
  // Schema to append to file
  const jsxTemplate =
    `import React from 'react';
import './${componentName.toLowerCase()}.scss';

export const ${componentName} = () => {
   return (
      <>
      <div className="${componentName.toLowerCase()}-container">Simple component</div>
      </>
   )
}

export default ${componentName};`

  // if return undfined = success operation.
  const appendErrFound = await appendFile(`src/components/${componentName}/${componentName}.jsx`, jsxTemplate)
  if (appendErrFound) return console.error(appendErrFound);
  console.log('Successfuly created JSX file.');
}

/**
 *  Creating *SCSS component file.
 *
 *  @param {String} fileName The name of file to create.
**/
const createReactScssComponent = async (componentName) => {
  // Schema to append to file
  const scssTemplate =
    `.${componentName.toLowerCase()}-container {
      padding: 0;
   }`

  // when returns undefined = success operation.
  const appendErrFound = await appendFile(`src/components/${componentName}/${componentName}.scss`, scssTemplate)
  if (appendErrFound) return console.error(appendErrFound);
  console.log('Successfuly created JSX file.');
}

const createComponent = async (componentName) => {
  try {
    await createFolderByName(componentName.toLowerCase())
    await createReactJsxComponent(componentName)
    await createReactScssComponent(componentName.toLowerCase())
  } catch (e) {
    console.log('CLI Error: Please try again. INFO:');
    console.log(`CLI Error: err number: ${e.errno} code: ${e.code} syscal: ${e.syscall}, path: ${e.path}`);
  }
}

module.exports = {
  writeFile,
  readLocal,
  createComponent
}