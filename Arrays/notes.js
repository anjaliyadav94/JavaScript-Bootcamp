const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Rome'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//to find object use find
const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}



// const note = findNote(notes, 'office modification')
// console.log(note)


