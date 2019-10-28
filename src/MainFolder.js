import React from 'react'
import Note from './Note'


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
        return (
            <Note note={notes}
                key={note.id}
                id={note.id}
                name={note.name}
                modified={note.modified}
            />
        )
    })

    return (
        <div>
            {renderNotes}
        </div>
    )
}