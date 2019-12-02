import React from 'react';
import './sidebar.css';
import { NavLink, Link } from 'react-router-dom'
import NotefulContext from './NotefulContext';
import Error from './Error'

class Sidebar extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {function renderProp(value) {
                    const { folders } = value
                    const foldersList = folders.map(folder => {
                        return (
                            
                            <NavLink 
                                to={`/folder/${folder.id}`} 
                                key={folder.id} 
                                className='folder-list'>
                                {folder.folder_name}
                            </NavLink>
                            
                        )
                    })
                    return (
                        < div >
                        <Error>
                            {foldersList}
                            < Link to='/addFolder' > Add Folder</Link>
                        </Error>
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