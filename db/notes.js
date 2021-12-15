const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {

    read() {
        return readFileAsync("db/db.json", "utf-8")
    };

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(notes => {
            let notesArray;

            try {
                notesArray = [].concat(JSON.parse(notes))
            }
            catch (err) {
                notesArray = [];
            }
            return notesArray;
        });
    };

    addNotes(newNote) {

        newNote.id = uuidv4();

        return this.getNotes().then(notesArray => {
            notesArray.push(newNote);
            this.write(notesArray)
        })
    }
    }

module.exports = new Notes();