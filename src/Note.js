import React from 'react';
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';
import config from './config'

function deleteNote(noteId, callback){
    console.log(noteId)
    fetch(`${config.NoteUrl}/${noteId}`,{
        method:'DELETE',
        headers: {
            'content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        callback(noteId)
    })
}
class Note extends React.Component {
    
    render() {
        const id = this.props.id
        const name = this.props.name
        const modified = this.props.modified
        return(
            <NotefulContext.Consumer>
                {function renderProp(value){
                    return(
                        <div>
                        <li>
                        <Link 
                            to={`/note/${id}`}>
                            <h3>{name}</h3>
                        </Link>
                        <p>Note modified on {modified}</p>
                        <button
                        onClick={() => 
                        deleteNote(id, value.deleteNote)}
                        >delete</button>
                        </li> 
                    </div>
                    )
                }}
            </NotefulContext.Consumer>
        )
    
    };
}


export default Note;

/* fetch(`http://localhost:1234/foo/${fooId}`, {
  method: 'DELETE',
  headers: {
    'content-type': 'application/json'
  },
}) */

/* return(
    <div>
        <li>
        <Link to={`/note/${this.props.id}`}><h3>{this.props.name}</h3></Link>
        <p>Note modified on {this.props.modified}</p>
        <button
        
        >delete</button>
        </li> 
    </div>
) */
