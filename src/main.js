import React from 'react';
import Note from './Note'
import NotefulContext from './NotefulContext';
import { Link } from 'react-router-dom'


class Main extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {function renderProp(value) {
                    const { notes } = value
                    const cards = notes.map(note => {
                        return (
                            <Note note={notes}
                                key={note.id}
                                id={note.id}
                                name={note.name}
                                modified={note.modified}
                            />
                        )
                    })
                    return (<div>
                        <ul>
                            {cards}
                            <li>
                                <Link to='/addNote' className='addNote'>
                                    <h2>addNote</h2>
                                    </Link>
                            </li>
                        </ul>
                        </div>

                    )
                }
                }
            </NotefulContext.Consumer>
        )
    }
}
// should render a list of notes with the note title, date, and a delete button


export default Main