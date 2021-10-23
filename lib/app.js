#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();
const loadServices = require("../services/index");

// load the services of the CLI
loadServices(program)

program.parse();
