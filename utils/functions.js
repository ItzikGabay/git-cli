/**
*  Parse the user input into message.
*
*  @param {Array} arr The array you want to parse
*  @return {Array} parsed array
**/
function parseMessageFromInput(arr) {
   arr = arr.join(' ')
   arr = arr + '"'
   arr = '"' + arr;
   return arr;
}

/**
*  Parse array into one string with " && "
*  between every command.
*  Mostly used for checking the user inputs and
*  by the results, we using array to push all the commands used needed.
*
*  @param {Array} arr The array you want to parse
*  @return {Array} parsed array
**/
function parseArgsToShellCommand(arr) {
   arr = arr.join(' && ')
   return arr;
}

/**
 *  Console UI for showing user inputs.
 *
 *  @param {String} origin Repo origin name
 *  @param {String} branch Repo branch name
 *  @param {String} origin Commit message
**/
function commitingUI(origin, branch, message) {
   console.log('Commiting to github...')
   console.log(`ORIGIN: ${origin}`)
   console.log(`BRANCH: ${branch}`)
   console.log(`MESSAGE: ${message}`)
   console.log(`Executing..`)
}

/**
 *  Parsing array of series of commands.
 *  for exp: ['git add .', 'git push -m", "test"]
 *  to -> 'git add . && git push -m "CLI Deploy" && test' String
 *
 *  @param {Array} arr The array of commands
 *  @param {String} origin Origin name
 *  @param {String} branch Branch name
 *  @param {String} message Meesage of commit
 *  @return {String} - Full command as string
**/
function parseArrToSingleCommand(arr, origin, branch, message) {
   let fullCommand = ""
   for (let [index, cmd] of arr.entries()) {
      let args = cmd;
      args = cmd.split(' ')[1]
      if (args === "commit") {
         cmd = `${cmd} ${message}`
      }
      if (args === "push") {
         cmd = `${cmd} ${origin} ${branch}`
      }

      if (index !== arr.length - 1) {
         fullCommand += cmd + " && ";
      } else {
         fullCommand += cmd

      }
   }
   return fullCommand;
}

const gitCommands = {
   commit: "git commit -m",
   add: 'git add .',
   push: 'git push'
}



module.exports = {
   parseMessageFromInput,
   parseArgsToShellCommand,
   commitingUI,
   gitCommands,
   parseArrToSingleCommand
}