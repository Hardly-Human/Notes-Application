console.log("Notes Application");

const yargs = require("yargs");
const utils = require("./notes.js");

yargs.command({
	command: "add",
	describe: "Add a Note.",
	builder: {
		title: {
			describe: "Title of Note.",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Body of Note.",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		utils.addNote(argv.title, argv.body);
	},
});

yargs.command({
	command: "remove",
	describe: "remove a Note.",
	builder: {
		title: {
			describe: "Title of Note.",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		console.log("removing a Note!!");
		console.log(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "list a Notes.",
	handler: function (argv) {
		console.log("listing all Notes!!");
	},
});

yargs.command({
	command: "read",
	describe: "read a Note.",
	builder: {
		title: {
			describe: "Title of Note.",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		console.log("Reading a Note!!");
		console.log(argv.title);
	},
});

yargs.parse();
