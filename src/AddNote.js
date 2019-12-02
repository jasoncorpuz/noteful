import React, { Component } from 'react';
import NotefulContext from './NotefulContext';
import config from './config';

export default class AddNote extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            name: '',
            content: '',
            id: '',
            nameValid: false,
            idValid: false,
            validationMessage: ''
        };
    }
    static contextType = NotefulContext;
    static defaultProps = {
        folders: []
    };

    isNameValid = event => {
        event.preventDefault();
        if (!this.state.name) {
            this.setState({
                validationMessage: 'Note name can not be blank.',
                nameValid: false
            });
        } else if (!this.state.id) {
            this.setState({
                validationMessage: 'You must choose a valid folder.',
                idValid: false
            });
        } else {
            this.setState(
                {
                    validationMessage: '',
                    nameValid: true
                },
                () => {
                    this.handleAddNote();
                }
            );
        }
    };

    handleAddNote = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                note_name: this.state.name,
                folder: this.state.id,
                content: this.state.content
            })
        };

        fetch(config.noteUrl, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Error. try again');
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                this.context.handleAddNote(data);
            })
            .catch(err => {
                this.setState({ error: err.message });
            });
    };

    nameChange = name => {
        this.setState({ name: name });
    };

    contentChange = content => {
        this.setState({ content: content });
    };

    idChange = folder => {
        this.setState({ id: folder });
    };

    render() {
        return (
            <NotefulContext.Consumer>
                {(context) => {
                    return (
                        <section className='AddNote'>
                            <h2>Create a note</h2>
                            <form
                                onSubmit={event => {
                                    this.isNameValid(event);
                                }}
                            >
                                <div className='field'>
                                    <label htmlFor='note-name-input'>Name</label>
                                    <input
                                        type='text'
                                        id='note-name-input'
                                        name='note'
                                        onChange={event => {
                                            this.nameChange(event.target.value);
                                        }}
                                    />
                                </div>
                                {!this.state.nameValid && (
                                    <div>
                                        <p>{this.state.validationMessage}</p>
                                    </div>
                                )}
                                <div className='field'>
                                    <label htmlFor='note-content-input'>Content</label>
                                    <textarea
                                        id='note-content-input'
                                        name='content'
                                        onChange={event => {
                                            this.contentChange(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className='field'>
                                    <label htmlFor='note-folder-select'>Folder</label>
                                    <select
                                        id='note-folder-select'
                                        name='folder'
                                        onChange={event => {
                                            this.idChange(event.target.value);
                                        }}
                                    >
                                        <option value={null}>...</option>
                                        {this.context.folders.map(folder => (
                                            <option key={folder.id} name='folder' value={folder.id}>
                                                {folder.folder_name}
                                            </option>
                                        ))}
                                    </select>
                                    {!this.state.nameValid && (
                                        <div>
                                            <p>{this.state.validationMessage}</p>
                                        </div>
                                    )}
                                </div>
                                <div className='buttons'>
                                    <button type='submit'>Add note</button>
                                </div>
                            </form>
                            {this.state.error && (
                                <div>
                                    <p>{this.state.error}</p>
                                </div>
                            )}
                        </section>
                    );
                }}
            </NotefulContext.Consumer>
        )
    }
}
