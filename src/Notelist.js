import React from 'react';
import { Link } from 'react-router-dom'

export default function Notelist(props) {
    const notelist = props.store
    const note = notelist.find(note =>
        note.id === props.match.params.noteId)
    console.log(note)
    return (
        <div><Link to={`/note/${note.id}`}><h3>{note.name}</h3></Link>
            <p>Note modified on {note.modified}</p>
            <button>delete</button>
            <p>{note.content}</p>
        </div>
    )
}

