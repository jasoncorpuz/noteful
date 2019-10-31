import React from 'react';
import NotefulContext from './NotefulContext';
import Note from './Note'
import PropTypes from 'prop-types'
import Error from './Error'


 class Notelist extends React.Component {
     
     render() {
     const noteID = this.props.match.params.noteId
     console.log(noteID)
     return(
         <NotefulContext.Consumer>
             {(value)  => {
                 const {notes} = value
                 const note = notes.find(note =>
                    note.id === noteID)
                 return(
                <Error>
                <div>
                <Note note={notes}
                    key={note.id}
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                />
                <p>{note.content}</p>
                </div>
                </Error>    

                 )
    
             }}
         </NotefulContext.Consumer>
     )
     }
 }

 Notelist.propTypes = {
    noteI: PropTypes.string
 }
 
 export default Notelist;

