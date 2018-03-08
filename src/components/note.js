import React from 'react';

class Note extends React.Component {

    

    render() {
        return (
            <div className="container">
                <div className="row note-top">
                    <span className="pull-left">{this.props.where}</span>
                    <span className="pull-right">{this.props.when}</span>
                </div>
                <div className="row">
                    <p>{this.props.what}</p>
                </div>
                <div className="row">
                    <a className="pull-right note-link" href="#" onClick={this.props.onEdit.bind(this, this.props)}>Edit</a> 
                    <a className="pull-right note-link" href="#" onClick={this.props.onDelete.bind(this, this.props)}>Delete</a>    
                </div>
                
            </div>
        )
    }
}
  
export default Note;
