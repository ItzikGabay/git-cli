const { exec } = require("child_process");
const filesystem = require('../../utils/filesystem');

module.exports = sController = (cmName) => {
   filesystem.createComponent(cmName)
}