import React from 'react';
import STORE from './STORE'
import './sidebar.css';
import { NavLink, Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';

class Sidebar extends React.Component {
    render() {
        const { folders } = STORE
        console.log(folders)
        const foldersList = folders.map(folder => {
            return (
                <NavLink to={`/folder/${folder.id}`} key={folder.id} className='folder-list'>{folder.name}</NavLink>
            )
        })
        return (
            <NotefulContext.Consumer>
                {function renderProp(value) {
                    console.log(value.foo)
                    return (
                        < div >
                            {foldersList}
                            < Link to='/' > Add Folder</Link>
                        </div >

                    )}
                }
            </NotefulContext.Consumer >
        )
    }
}

Sidebar.defaultProps = {
    data: {}
}

export default Sidebar;