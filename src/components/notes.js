import React from 'react';
import NotesList from './notes-list'
import Subtitle from './subtitle'

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
                <div id="subtitle-container" className="row">
                    <Subtitle subtitle="Notes" />
                    <button id="button-add" className="pull-left btn btn-success">Add Note</button>
                </div>

            <NotesList />
          </div>
        )
    }
}
  
export default Notes;
