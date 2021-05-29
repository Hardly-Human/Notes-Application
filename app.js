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
	handler(argv) {
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
	handler(argv) {
		utils.removeNote(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "list a Notes.",
	handler() {
		utils.listNotes();
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
	handler(argv) {
		utils.readNote(argv.title);
	},
});

yargs.parse();
