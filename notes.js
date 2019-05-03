//console.log('Starting notes.js');

const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) { // filter loops through every item in the array
    //     return note.title === title
    // })
    const duplicateNote = notes.find(function (note) {  // find loops through and stops at the first occurence
        return note.title === title
    })

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(notes)

    } else {
        console.log(chalk.red.bold("Duplicate Note!"))
    }
  

    

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}


const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []

    } 

}

const removeNote = function (title) {
    notes = loadNotes()

    const notesToKeep = notes.filter(function (note) {
        return note.title != title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.bold('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.bold('Nothing to remove'))
    }

}


const listNotes = function () {
    const notes = loadNotes()
    console.log("Listing Notes...")
    
    notes.forEach(note => {
        console.log(chalk.red.bold(note.title)) 
    });


}


const readNote = function (title) {
    const notes = loadNotes()
    
    const noteToRead = notes.find(function (note) {
        return note.title === title
    })

    debugger

    if (noteToRead) {
        console.log(chalk.green.bold("Title: ") + noteToRead.title)
        console.log(chalk.green.bold("Body: ") + noteToRead.body)
    } else {
        console.log("Error!")
    } 
}

module.exports = { // set exports as an "object" and define multiple functions to export
    getNotes,
    addNote,
    loadNotes,
    removeNote,
    listNotes,
    readNote

};

