const testCommand = require("./test/test");
const acpCommand = require("./acp/acp");

const loadServices = (program) => {
   testCommand(program)
   acpCommand(program)
}

module.exports = loadServices;