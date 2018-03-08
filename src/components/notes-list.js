import React from 'react';
import Note from './note';

class NotesList extends React.Component {
    constructor(props) {
        super(props);

        // Add some state here to track all of our notes and form state
        this.state = {
            txtWhereInput: '',
            dateWhenInput: '',
            txtWhatInput: '',
            notes: []
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* Add a form here to add all the properties of a note */}
                                <p><label htmlFor="txtWhere">Where:</label>
                                <input type="text" className="form-control" id="txtWhere" value={ this.state.txtWhereInput } onChange={ this.txtWhereInputChange.bind(this)  } /></p>
                                
                                <p><label htmlFor="dateWhen">When:</label>
                                <input type="date" className="form-control" id="dateWhen" value={ this.state.dateWhenInput } onChange={ this.dateWhenInputChange.bind(this)  } /></p>

                                <p><label htmlFor="txtWhat">What:</label>
                                <input type="text" className="form-control" id="txtWhat" value={ this.state.txtWhatInput } onChange={ this.txtWhatInputChange.bind(this) } /></p>

                                <button id="btnSubmit" className="btn btn-primary" onClick={ this.saveNote.bind(this) }>Save Note</button>
                            </div>
                            <div className="row">
                                {/* Show all notes in your state here */}
                                <div>
                                    {
                                        this.state.notes.map((n, i) => 
                                            <div key={ i }>
                                                <Note id= { n.id } where={ n.where } when={ n.when } what={ n.what } onEdit={ this.noteEdit.bind(this) } onDelete={ this.noteDelete.bind(this) } />
                                            </div>
                                        )
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
        
    }

    noteEdit(note) {
        this.setState({
            txtWhatInput: note.what,
            txtWhenInput: note.when,
            txtWhereInput: note.where,
        })

    }

    noteDelete(note) {
        var newNotes = this.state.notes.slice();
        // newNotes = newNotes.filter(item => item.id != note.id)

        for (var i = 0; i < newNotes.length; i++) {
            if (newNotes[i].id == note.id) {
                newNotes.splice(i, 1);
            }
        }

        this.setState = ({
            notes: newNotes
        })
    }

    txtWhereInputChange(e) {
        // Save the where button
        this.setState ({
            txtWhereInput: e.target.value
        })
    }

    dateWhenInputChange(e) {
        // Save the when input entry
        this.setState({
            dateWhenInput: e.target.value
        })
    }

    txtWhatInputChange(e) {
        // Save the what input entry
        this.setState({
            txtWhatInput: e.target.value
        })
    }


    saveNote(e) {
        // Save the note
        // Copy the array
        var notesArr = this.state.notes.slice();

        // Set the values
        notesArr.push ( {
            id: Date.now(),  // or use uniqid()
            where: this.state.txtWhereInput,
            when: this.state.dateWhenInput,
            what: this.state.txtWhatInput
        })

        // Set the state
        this.setState ({
            notes: notesArr,

            // Clear the input state
            txtWhereInput: '',
            dateWhenInput: '',
            txtWhatInput: ''

        })

    }



}

export default NotesList;
