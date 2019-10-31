import React from 'react'
import Note from './Note'
import NotefulContext from './NotefulContext';
import { Link } from 'react-router-dom';


class MainFolder extends React.Component {

    render() {
        const folderID = this.props.match.params.folderId
        console.log(folderID)
        return (
            <NotefulContext.Consumer>
                {function renderProp(value) {
                    const { notes, folders } = value
                    const list = folders.find(folder =>
                        folder.id === folderID)

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
                    console.log(findNotes)
                    console.log(value)
                    return (
                    <div>
                        {renderNotes}
                        <Link to='/addNote' className='addNote'>
                            <h2>add note</h2>
                        </Link>
                        </div>
                    )
                }}
            </NotefulContext.Consumer>
        )
    }
}

export default MainFolder;