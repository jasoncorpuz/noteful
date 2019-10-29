import React from 'react';
import './sidebar.css';
import { NavLink, Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';

class Sidebar extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {function renderProp(value) {
                    console.log(value)
                    const { folders } = value
                    const foldersList = folders.map(folder => {
                        return (
                            <NavLink 
                                to={`/folder/${folder.id}`} 
                                key={folder.id} 
                                className='folder-list'>
                                {folder.name}
                            </NavLink>
                        )
                    })
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