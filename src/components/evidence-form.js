import React, { Component } from 'react';
import Evidence from './evidence'
import uniqid from 'uniqid'
import Title from './title-bar'
import Menu from './menu'

import { connect } from 'react-redux'
import { saveLog } from '../redux/action'


class EvidenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // state goes here 
            firstNameInput: '',
            dateInput: '',
            locationInput: '',
            foundWithInput: '',
        }
    }
    render() {
        return (
            <div>
                
                <div className="col-md-12 continer-fluid">
                    <h3 className="pull-left">Evidence</h3>
                    <button id="button-add" className="pull-left btn btn-primary">Log Evidence</button>

                </div>
                <div className="container">
                    <div className="row">


                        <div className="col-md-6">
                            <div className="form-group">
                                {/* Add a form here to add all the properties of a note */}
                                <p>
                                    <label htmlFor="txtWhere">First Name:</label>
                                    <input type="text" className="form-control" id="firstName" value={this.state.firstNameInput} onChange={(e) => { this.setState({ firstNameInput: e.target.value }) }} />
                                </p>

                                <p>
                                    <label htmlFor="dateWhen">Date:</label>
                                    <input type="date" className="form-control" id="date" value={this.state.dateInput} onChange={(e) => { this.setState({ secondNameInput: e.target.value }) }} />
                                </p>

                                <p>
                                    <label htmlFor="txtWhat">Location Found:</label>
                                    <input type="text" className="form-control" id="locationFound" value={this.state.locationInput} onChange={(e) => { this.setState({ locationInput: e.target.value }) }} />
                                </p>

                                <p>
                                    <label htmlFor="txtWhat">Person Found With:</label>
                                    <input type="text" className="form-control" id="foundWith" value={this.state.foundWithInput} onChange={(e) => { this.setState({ foundWithInput: e.target.value }) }} />
                                </p>

                                <button id="btnSubmit" className="btn btn-primary" onClick={this.saveLog.bind(this)} >Save log</button>
                            </div>
                         
                           
                            <div className="row">
                                {/* Show all notes in your state here */}
                                <div>
                                    {
                                        this.props.evidence.map((item, index) =>
                                            <div key={index} >
                                                <Evidence id={item.id} name={item.name} date={item.date} location={item.location} found={item.found} />
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



    saveLog(e) {
        // save the log to the store
        console.log(e)
        console.log(this.props.evidence)

        var logArr = this.props.evidence.concat({
            id: uniqid(),
            name: this.state.firstNameInput,
            date: this.state.dateInput,
            location: this.state.locationInput,
            found: this.state.foundWithInput


        }

        );
        console.log(logArr)
        this.props.saveLogs(logArr);
    }



}

const MapStateToProps = state => {
    return {
        evidence: state.evidence
    }
    console.log(MapStateToProps)
}
const MapDispatchToProps = dispatch => {
    return {
        saveLogs: evidence => dispatch(saveLog(evidence))
    }
}





export default connect(MapStateToProps, MapDispatchToProps)(EvidenceForm)