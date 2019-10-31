import React, { Component } from 'react';
import ValidationError from './ValidationError'
import config from './config'
import NotefulContext from './NotefulContext';


class AddFolder extends Component {
    state = {
        folder: {
            value:'',
            touched:false
        }
    }

    onSubmit(e, cb){
        console.log(cb)
        e.preventDefault();
        const {folder} = this.state
        fetch(config.folderUrl, {
            method:'POST',
            body:JSON.stringify(folder),
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res => {
            if(!res.ok){
                throw new Error('Something broke. Try again?')
            }
            return res.json()
        })
        .then(data => 
            cb(data))
        
    }

    updateAdd(folder) {
        this.setState({ folder: {value:folder, touched:true}})
    }
    validateFolder(){
        const folder = this.state.folder.value.trim();
        if(folder.length === 0 ) {
            return 'Folder name required'
        }
    }

    render() {
     return(
        <NotefulContext.Consumer>
            {(context) => {
              return (
                <div>
                    <h2>Create a Folder</h2>
                    <form onSubmit={e => this.onSubmit(e,context.addFolder)}>
                        <label htmlFor='input'>Name:</label>
                        <input 
                            type='text' 
                            name='folder' 
                            onChange={e => this.updateAdd(e.target.value)}
                        >
                        </input> {/* access through 'name' */}
                        {this.state.folder.touched && (
                            <ValidationError message={this.validateFolder()} />
                        )}
                        <button 
                        type='submit'
              
                        >AddFolder</button>
                    </form>
                </div>
              )
            }}
        </NotefulContext.Consumer>
     )
        
    }
}

export default AddFolder;

