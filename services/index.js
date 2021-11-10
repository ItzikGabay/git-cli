// const testCommand = require("./test/test");
const acpCommand = require("./acp/acp");
const addLocalCommand = require("./addLocal/addLocal");
const readLocalCommand = require("./readLocal/readLocal");
const rCommand = require("./r/r");
const sCommand = require("./s/s");
const kpCommand = require("./kp/kp");
const cmCommand = require("./cm/cm");


const loadServices = (program) => {
   // testCommand(program)
   cmCommand(program)
   sCommand(program)
   rCommand(program)
   acpCommand(program)
   addLocalCommand(program)
   readLocalCommand(program)
   kpCommand(program)
}

module.exports = loadServices;