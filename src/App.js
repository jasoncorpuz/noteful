import React from 'react';
import Main from './main'
import Sidebar from './sidebar';
import { Route, Link } from 'react-router-dom';
import './App.css'
import STORE from './STORE'
import Notelist from './Notelist'
import MainFolder from './MainFolder'

class App extends React.Component {
  render() {
    console.log(STORE)
    return (
      <>
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
      </>
    )
  }
}

export default App;
