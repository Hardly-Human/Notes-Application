console.log("Notes Application");

const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
	command: "add",
	describe: "Add a Note.",
	handler: function () {
		console.log("Adding a Note!!");
	},
});

yargs.command({
	command: "remove",
	describe: "remove a Note.",
	handler: function () {
		console.log("removing a Note!!");
	},
});

yargs.command({
	command: "list",
	describe: "list a Notes.",
	handler: function () {
		console.log("listing all Notes!!");
	},
});

yargs.command({
	command: "read",
	describe: "read a Note.",
	handler: function () {
		console.log("Reading a Note!!");
	},
});

yargs.parse();
