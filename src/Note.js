import React from 'react';
import { Link } from 'react-router-dom'

class Note extends React.Component {
    
    render() {
        return(
            <div>
                    <li>
                    <Link to={`/note/${this.props.id}`}><h3>{this.props.name}</h3></Link>
                    <p>Note modified on {this.props.modified}</p>
                    <button>delete</button>
                    </li> 
            </div>
        )
    }
};

Note.defaultProps = {
    note: {}
}
export default Note;