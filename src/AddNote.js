import React, { Component } from 'react';
import NotefulContext from './NotefulContext'

class AddNote extends Component {
    state = {
        note: {
            value:'',
            folder:'Important'
        }
    }

    onAdd(e) {
       e.preventDefault();
      const name = this.state.note.value
      const folder = this.state.note.folder
      console.log(name, folder)
    }

    updateName(name){
        this.setState({note: {value:name}})
    }

    updateFolder(e){
        this.setState({note: {folder:e.target.value}})
    }


    render() {
        console.log(this.state)
        return(
            <NotefulContext.Consumer>
                {(context)=>{ /* DO NOT USE FUNCTION, USE ARROW */
                    const { folders } = context
                    const options = folders.map(folder =>{
                        return(
                        <option
                        key={folder.id} 
                        name='option'
                        value={folder.name}
                        >{folder.name}
                        </option>
                        )
                    })
                    return(
                        <div>
                        <h2>Add Note</h2>
                        <form onSubmit={e => this.onAdd(e)}>
                            <label htmlFor='input'>Name:</label>
                            <input 
                            type='text'
                            name='note'
                            value={this.state.note.value}
                            onChange={e => this.updateName(e.target.value)}
                            ></input>
                            <select value={this.state.folder.value} onChange={e =>this.updateFolder(e)}>    
                                {options}
                            </select>
                            <button type='submit'>save</button>
                        </form>
                        </div>
                    )
                }}
            </NotefulContext.Consumer>
        )
    }
}

export default AddNote;

