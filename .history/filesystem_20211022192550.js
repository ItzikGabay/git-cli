console.log('Started..');
// create function to read a file
var fs = require('fs');

var myOptions = {
  name: 'Avian',
  dessert: 'cake',
  flavor: 'chocolate',
  beverage: 'coffee'
};

var data = JSON.stringify(myOptions);

writeFile()

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


// create function to write a file