import React from 'react';
import { Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';
import config from './config'
import PropTypes from 'prop-types'

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
                {(value) => {
                    return(
                        <div>
                        <li>
                        <Link 
                            to={`/note/${this.props.id}`}>
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

Note.defaultProps = {
    id:'',
    name:'',
    modified:''
}

Note.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    modified: PropTypes.string
}


export default Note;

