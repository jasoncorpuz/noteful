import React from 'react';

//methods we are going to use
//data we're going to store

const NotefulContext = React.createContext({
    deleteNote: () => {},
    addFolder : () => {},
    handleAddNote: () => {}
})

export default NotefulContext;