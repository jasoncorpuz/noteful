import React from 'react';
import NotefulContext from './NotefulContext';
import Note from './Note'
import PropTypes from 'prop-types'


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

 Notelist.propTypes = {
    noteI: PropTypes.string
 }
 
 export default Notelist;