import React, { Component } from 'react';

import { connect } from 'react-redux'
import { savePerson } from '../redux/action'
import uniqid from 'uniqid'

class AddPersonForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            imageInput: '',
            nameInput: '',
            lastSeenInput: '',
            dateSeenInput: ''
        }
    }
    

    render() {
        return (
            <div className="col-md-3 text-center formRow">
                <div className="imageStyle form-group">
                    <img src="http://www.pvhc.net/img29/jyfitaoewknixuoeblsj.png" id="image" />
                </div>
               
                    <div className="row formRow">
                        <label htmlFor="imageInput" className="pull-left"> Upload Image: </label>
                        <input type="text" className="form-control" value={ this.state.imageInput } onChange={ (e) => { this.setState({ imageInput: e.target.value })  } } />
                    </div>
           
                <div className="row formRow">
                    <label htmlFor="personName" className="pull-left">Name: </label>
                    <input type="text" className="form-control" value={ this.state.nameInput} onChange={ (e) => { this.setState({ nameInput: e.target.value  }) } } />
                </div>
                <div className="row formRow">
                    <label htmlFor="lastSeen" className="pull-left">Last Seen: </label>
                    <input type="date" className="form-control"  value={ this.state.lastSeenInput } onChange={ (e) => { this.setState({ lastSeenInput: e.target.value  }) } }  />
                </div>
                <div className="row formRow">
                    <label htmlFor="dateSeen" className="pull-left">Date Seen: </label>
                    <input type="date" className="form-control" value={ this.state.dateSeenInput }  onChange={ (e) => { this.setState({ dateSeenInput: e.target.value }) } } />
                </div>
                    <button className="btn btn-primary pull-right col-md-12" id="saveBtn" onClick={ this.addPerson.bind(this) }>Save</button>
            </div>
         
          )
    }


    addPerson(e) {
        // Add a person
        var personArr = this.props.person.concat({
            id: uniqid(),
            name: this.state.nameInput,
            lastSeen: this.state.lastSeenInput,
            dateSeen: this.state.dateSeenInput,
            image:this.state.imageInput
        })

        this.props.savePersonSubmit(personArr);

        // Clear the textboxes
        this.setState({
            name: '',
            lastSeen: '',
            dateSeen: '',
            image: ''
        })

    }

}

const MapStateToProps = state => {
    return {
        person: state.person
    }
}

const MapDispatchToProps = dispatch =>  {
    return {
        savePersonSubmit: notes => dispatch(savePerson(notes))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(AddPersonForm)