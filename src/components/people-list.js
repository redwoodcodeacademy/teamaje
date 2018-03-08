import React, { Component } from 'react';
import Subtitle from './subtitle'
import AddPerson from './add-person'

class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div id="subtitle-container" className="row">
                    <Subtitle subtitle="People" />
                    <button id="button-add" className="pull-left btn btn-success">Add Person</button>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <AddPerson />
                        <AddPerson />
                        <AddPerson />
                        <AddPerson />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <AddPerson />
                        <AddPerson />
                        <AddPerson />
                        <AddPerson />
                    </div>
                </div>
            </div>
        )
    }
}

export default PeopleList;