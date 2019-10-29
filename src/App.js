import React from 'react';
import Main from './main'
import Sidebar from './sidebar';
import { Route, Link } from 'react-router-dom';
import './App.css'

import Notelist from './Notelist'
import MainFolder from './MainFolder'
import NotefulContext from './NotefulContext'
import config from './config'

//needs to store api requests in a context 
// delete needs to be context object




class App extends React.Component {
  state = {
    notes: [],
    folders:[],
  }

  setNotes = notes => {
    this.setState({
      notes: notes
    })
  }
  setFolders = folders => {
    this.setState({
      folders:folders
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => 
      note.id !== noteId)
      this.setState({
        notes:newNotes
      })
  }

  componentDidMount() {
    fetch(config.folderUrl)
    .then (r => {
      if(!r.ok){
        throw new Error('AHHHHHH')
      }
      return r.json()
    })
    .then(data => this.setFolders(data))
    .catch(err => console.log(err));

    fetch(config.NoteUrl)
    .then (r => {
      if(!r.ok){
        throw new Error('AHHHHHH')
      }
      return r.json()
    })
    .then(data => this.setNotes(data))
    .catch(err => console.log(err))
    


    }
    
  
  render() {
    const contextValue = {
      notes:this.state.notes,
      folders:this.state.folders,
      deleteNote: this.deleteNote
    }
 
  

    return (
      <NotefulContext.Provider value={contextValue}>
        <header><h1><Link to='/' className='title'>Noteful</Link></h1></header>
        <main className='main'>
          <div className='column' id='sidebar'>
            <Route path='/' component={Sidebar} exact />
            <Route path='/folder' component={Sidebar} />
            <Route path='/note' component={Sidebar} />
          </div>

          <div className='column'>
            <Route path='/' component={Main} exact />
            <Route path='/folder/:folderId' render={(props) => <MainFolder  {...props} />}  />
            <Route path='/note/:noteId' render={(props) => <Notelist {...props} />} />
          </div>
        </main>
      </NotefulContext.Provider>
    )
  }
}


export default App;
