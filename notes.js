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

// create a note.........
// add..

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
	} else {
		newNote = {
			title: title,
			body: body,
		};
		notes.push(newNote);
		savesNotes(notes);
		console.log(chalk.green.inverse("Note added Successfully.."));
	}
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
};
