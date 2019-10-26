import React from 'react'
import { Link } from 'react-router-dom'

export default function Mainfolder(props) {
    const folders = props.store
    const notes = props.notes
    const list = folders.find(folder =>
        folder.id === props.match.params.folderId)
    console.log(list) //an object
    const findNotes = notes.filter(note =>
        note.folderId === list.id
        )
    
    const renderNotes = findNotes.map(note => {
        return(
            <li key={note.id}>
                <Link to={`/note/${note.id}`}><h3>{note.name}</h3></Link>
                <p>Note modified on {note.modified}</p>
                <button>delete</button>
            </li>)
    })
    
    return(
        <div>
            {renderNotes}        
        </div>
        )
}