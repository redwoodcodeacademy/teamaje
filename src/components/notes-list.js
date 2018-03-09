import React from 'react'
import Note from './note'
import uniqid from 'uniqid'

import { connect } from 'react-redux'
import { saveNote } from '..//redux/action'

class NotesList extends React.Component {
    constructor(props) {
        super(props);

        // Add some state here to track all of our notes and form state
        this.state = {
            txtWhereInput: '',
            dateWhenInput: '',
            txtWhatInput: '',
            editNoteIndex: 0
        }
    }

    componentDidMount() {
        // Hide the edit and cancel buttons when the component is loaded
        $('#btnEdit').hide();
        $("#btnCancel").hide();
        $('#btnCancel').css("margin-left", "10px");

        $('#btnSubmit').show();
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
                                <input type="text" className="form-control" id="txtWhere" value={ this.state.txtWhereInput } onChange={ (e) => { this.setState ({ txtWhereInput: e.target.value }) }  } /></p>
                                
                                <p><label htmlFor="dateWhen">When:</label>
                                <input type="date" className="form-control" id="dateWhen" value={ this.state.dateWhenInput } onChange={ (e) => { this.setState({ dateWhenInput: e.target.value }) }  } /></p>

                                <p><label htmlFor="txtWhat">What:</label>
                                <input type="text" className="form-control" id="txtWhat" value={ this.state.txtWhatInput } onChange={ (e) => { this.setState({ txtWhatInput: e.target.value  }) } } /></p>

                                <button id="btnSubmit" className="btn btn-primary" onClick={ this.saveNote.bind(this) }>Save Note</button>
                                
                                <button id="btnEdit" className="btn btn-primary" onClick={ this.editNote.bind(this) }>Edit Note</button>
                                <button id="btnCancel" className="btn btn-primary" onClick={ this.cancelEdit.bind(this) }>Cancel</button>
                            </div>
                            <div className="row">
                                {/* Show all notes in your state here */}
                                
                                <div>
                                    {
                                        this.props.notes.map((item, index) => 
                                            <div key={ index }>
                                                <Note id= { item.id } where={ item.where } when={ item.when } what={ item.what } onEdit={ this.noteEdit.bind(this, index ) } onDelete={ this.noteDelete.bind(this, index) } />
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

    saveNote(e) {
        // Save the note to the store

        var notesArr = this.props.notes.concat( {
            id: uniqid(),
            where: this.state.txtWhereInput,
            when: this.state.dateWhenInput,
            what: this.state.txtWhatInput
        });

        // Save to redux
        this.props.saveNotes(notesArr);

        // Remove entries from the textbox
        this.resetState();

    }

    resetState() {
        // Resets the state to remove entries from the textbox
        this.setState({
            txtWhatInput: '',
            dateWhenInput: '',
            txtWhereInput: '',
            editNoteIndex: 0
        })
    }

    noteDelete(index, note) {
        // Remove the note at the supplied index
        var notesCopy = this.props.notes.slice();
        // newNotes = newNotes.filter(item => item.id != note.id)
        // console.log(index);
        notesCopy.splice(index, 1);

        // Save to redux
        this.props.saveNotes(notesCopy);
        
    }
    

    noteEdit(index, note) {
        // Edit the note at the supplied index
        // Place the values into the respective textboxes
        this.setState({
            txtWhatInput: note.what,
            dateWhenInput: note.when,
            txtWhereInput: note.where,
        })
        
        // Hide the Save Note button
        $('#btnSubmit').hide();        

        // Display the Edit Note and Cancel buttons
        $('#btnEdit').show();
        $('#btnCancel').show();

        // Update the index in the state for use when the user clicks the final Edit Note button
        this.setState({
            editNoteIndex: index
        })

    }

    editNote(e) {
        // Edit the note to the store
        console.log("Edit this item", this.state.editNoteIndex);

        var notesCopy = this.props.notes.slice();

        // Loop through the array and edit the record at the index provided

        for (var i = 0; i < notesCopy.length; i++) {
            if (i == this.state.editNoteIndex) {
                notesCopy[i].where = this.state.txtWhereInput,
                notesCopy[i].when = this.state.dateWhenInput,
                notesCopy[i].what = this.state.txtWhatInput
            }
        }

        // Save to redux
        this.props.saveNotes(notesCopy);

        // Hide the Edit and Cancel buttons
        $("#btnEdit").hide();
        $("#btnCancel").hide();

        // Display the Save button
        $("#btnSubmit").show();

        // Remove entries from the textbox
        this.resetState();

    }
    
    cancelEdit(e) {
        // Cancel the edit, clear the textboxes and display the Save button

        // Hide the edit and cancel buttons
        $("#btnEdit").hide();
        $("#btnCancel").hide();

        // Display the save button
        $("#btnSubmit").show();

        // Remove entries from the textbox
        this.resetState();
    }



}

const MapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const MapDispatchToProps = dispatch =>  {
    return {
        saveNotes: notes => dispatch(saveNote(notes))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(NotesList)
