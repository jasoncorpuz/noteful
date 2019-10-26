import React from 'react';
import STORE from './STORE'
import './sidebar.css';
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends React.Component {
    render() {
        const { folders } = STORE
        console.log(folders)
        const foldersList = folders.map(folder => {
            return (
                <NavLink to={`/folder/${folder.id}`}key={folder.id} className='folder-list'>{folder.name}</NavLink>
            )
        })
        return (
            <div>
            {foldersList}
            <Link to='/'>Add Folder</Link>
            </div>
        )
    }
}

Sidebar.defaultProps = {
    data: {}
}

export default Sidebar;