import React from 'react';
import Main from './main'
import Sidebar from './sidebar';
import { Route, Link } from 'react-router-dom';
import './App.css'
import STORE from './STORE'
import Notelist from './Notelist'
import MainFolder from './MainFolder'
import NotefulContext from './NotefulContext'
//needs to store api requests in a context 
// delete needs to be context object



class App extends React.Component {
  state = {
    notes: 'poopy'
  }
  render() {
    const contextValue = {
      foo:this.state.notes
    }
    console.log(STORE)
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
            <Route path='/folder/:folderId' render={(props) => <MainFolder store={STORE.folders} {...props} notes={STORE.notes}/>}  />
            <Route path='/note/:noteId' render={(props) => <Notelist store={STORE.notes} {...props} />} />
          </div>
        </main>
      </NotefulContext.Provider>
    )
  }
}

export default App;
