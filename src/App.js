import React from 'react';
import Main from './main'
import Sidebar from './sidebar';
import { Route, Link } from 'react-router-dom';
import AddFolder from './AddFolder'
import AddNote from './AddNote'
import './App.css'
import Notelist from './Notelist'
import MainFolder from './MainFolder'
import NotefulContext from './NotefulContext'
import config from './config'
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  }

  setNotes = notes => {
    this.setState({
      notes: notes
    })
  }
  setFolders = folders => {
    this.setState({
      folders: folders
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }
  addFolder = (name) => {
    const { value, id } = name
    const newFolder = {
      "id": id,
      "name": value
    }
    console.log(newFolder)
    this.setState({ folders: [...this.state.folders, newFolder] })
    console.log(this.state.folders)
    this.props.history.push('/')
  }

  handleAddNote = (data) => {
    console.log(data)
    const {name, modified, folderId, content, id } = data
    const newNote = {
      'id':id,
      'name':name,
      'modified':modified,
      'folderId':folderId,
      'content':content
    }
    this.setState({ notes: [...this.state.notes, newNote]})
    console.log(this.state.notes)
    this.props.history.push('/')
  }
  componentDidMount() {
    fetch(config.folderUrl)
      .then(r => {
        if (!r.ok) {
          throw new Error('AHHHHHH')
        }
        return r.json()
      })
      .then(data => this.setFolders(data))
      .catch(err => console.log(err));

    fetch(config.NoteUrl)
      .then(r => {
        if (!r.ok) {
          throw new Error('AHHHHHH')
        }
        return r.json()
      })
      .then(data => this.setNotes(data))
      .catch(err => console.log(err))



  }


  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      handleAddNote:this.handleAddNote
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

          <div className='column' id='content'>
            <Route path='/' component={Main} exact />
            <Route path='/folder/:folderId' render={(props) => <MainFolder  {...props} />} />
            <Route path='/note/:noteId' render={(props) => <Notelist {...props} />} />
            <Route path='/addFolder' component={AddFolder} />
            <Route path='/addNote' component={AddNote} />
          </div>

        </main>
      </NotefulContext.Provider>
    )
  }
}


export default withRouter(App);
