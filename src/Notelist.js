import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import Note from './Note'



/* export default function Notelist(props) {
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

 */

 class Notelist extends React.Component {
     
     render() {
     const noteID = this.props.match.params.noteId
     console.log(noteID)
     return(
         <NotefulContext.Consumer>
             {function renderProp(value) {
                 const notelist = value.notes
                 const note = notelist.find(note =>
                    note.id === noteID)
                 return(
                 /*    <div><Link to={`/note/${note.id}`}><h3>{note.name}</h3></Link>
                    <p>Note modified on {note.modified}</p>
                    <button>delete</button>
                    <p>{note.content}</p>
                </div> */
                <div>
                <Note note={notelist}
                    key={note.id}
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                />
                <p>{note.content}</p>
                </div>

                 )
    
             }}
         </NotefulContext.Consumer>
     )
     }
 }

 Notelist.defaultProps = {

 }
 
 export default Notelist;