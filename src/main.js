import React from 'react';
import STORE from './STORE'
import Note from './Note'


class Main extends React.Component {
    render() {
        console.log(STORE)
        const { notes } = STORE
        const cards = notes.map(note => {
            return(
                <Note note={notes} 
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
                />
            )
        })
        return (
            <ul>{cards}</ul>
        )
    }
}
// should render a list of notes with the note title, date, and a delete button


export default Main