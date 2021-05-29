const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		return JSON.parse(dataBuffer.toString());
	} catch (error) {
		return [];
	}
};

const savesNotes = (notes) => {
	const notesJSON = JSON.stringify(notes);
	fs.writeFileSync("./notes.json", notesJSON);
};

const addNote = (title, body) => {
	let notes = getNotes();

	const duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length > 0) {
		console.log(
			chalk.red.inverse(
				"Title Already Exists..Please Provide unique title.."
			)
		);
		return;
	}
	newNote = {
		title,
		body,
	};
	notes.push(newNote);
	savesNotes(notes);
	console.log(chalk.green.inverse("Note added Successfully.."));
};

const removeNote = (title) => {
	let notes = getNotes();

	const removingNote = notes.filter((note) => note.title !== title);

	if (removingNote.length === notes.length) {
		console.log(
			chalk.red.inverse("Cannot find any note with given title...")
		);
		return;
	}
	savesNotes(removingNote);
	console.log(chalk.green.inverse("Note Successfully Deleted.."));
};

const listNotes = () => {
	const notes = getNotes();
	if (notes.length === 0) {
		console.log(chalk.blue.inverse("No Notes Yet!!!"));
		return;
	}
	console.log(chalk.green.inverse("* * * All Notes * * *"));
	notes.forEach((note) => {
		console.log(chalk.yellow.inverse(` ${note.title} `));
	});
};

const readNote = (title) => {
	const notes = getNotes();

	const readingNote = notes.filter((note) => title === note.title);

	if (readingNote.length === 0) {
		console.log(
			chalk.red.inverse(
				"Note with given Title not Exists..Try differnet title.."
			)
		);
		return;
	}
	console.log(`Title : ${readingNote[0].title}`);
	console.log(`Body : ${readingNote[0].body}`);
};

// tests

// notes = [
// 	{
// 		title: "rehan",
// 		body: "uddin",
// 	},
// 	{
// 		title: "rehan1",
// 		body: "uddin",
// 	},
// ];

// savesNotes(notes);

// const data = getNotes();
// console.log(data);

// addNote("rehan", "uddin shaik");

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};
