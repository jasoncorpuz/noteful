import React from 'react';
import STORE from './STORE'
import { Link } from 'react-router-dom'

class Main extends React.Component {
    render() {
        console.log(STORE)
        const { notes } = STORE
        const cards = notes.map(note => {
            return(
            <li key={note.id}>
                <Link to={`/note/${note.id}`}><h3>{note.name}</h3></Link>
                <p>Note modified on {note.modified}</p>
                <button>delete</button>
            </li>)
        })
        return (
            <ul>{cards}</ul>
        )
    }
}
// should render a list of notes with the note title, date, and a delete button


export default Main