const testCommand = require("./test/test");
const acpCommand = require("./acp/acp");
const addLocalCommand = require("./addLocal/addLocal");
const readLocalCommand = require("./readLocal/readLocal");
const rCommand = require("./r/r");

const loadServices = (program) => {
   testCommand(program)
   acpCommand(program)
   addLocalCommand(program)
   readLocalCommand(program)
   rCommand(program)
}

module.exports = loadServices;