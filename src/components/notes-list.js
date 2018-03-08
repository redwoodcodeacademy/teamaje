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
            txtWhatInput: ''
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
                                <input type="text" className="form-control" id="txtWhere" value={ this.state.txtWhereInput } onChange={ (e) => { this.setState ({ txtWhereInput: e.target.value }) }  } /></p>
                                
                                <p><label htmlFor="dateWhen">When:</label>
                                <input type="date" className="form-control" id="dateWhen" value={ this.state.dateWhenInput } onChange={ (e) => { this.setState({ dateWhenInput: e.target.value }) }  } /></p>

                                <p><label htmlFor="txtWhat">What:</label>
                                <input type="text" className="form-control" id="txtWhat" value={ this.state.txtWhatInput } onChange={ (e) => { this.setState({ txtWhatInput: e.target.value  }) } } /></p>

                                <button id="btnSubmit" className="btn btn-primary" onClick={ this.saveNote.bind(this) }>Save Note</button>
                            </div>
                            <div className="row">
                                {/* Show all notes in your state here */}
                                <div>
                                    {
                                        this.props.notes.map((item, index) => 
                                            <div key={ index }>
                                                <Note id= { item.id } where={ item.where } when={ item.when } what={ item.what } onEdit={ this.noteEdit.bind(this) } onDelete={ this.noteDelete.bind(this) } />
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

        // this.setState = ({
        //     notes: newNotes
        // })
    }


    saveNote(e) {
        // Save the note to the store

        var notesArr = this.props.notes.concat( {
            id: uniqid(),
            where: this.state.txtWhereInput,
            when: this.state.dateWhenInput,
            what: this.state.txtWhatInput
        });

        // Save to the store
        this.props.saveNotes(notesArr);

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
