import React, { Component } from 'react';
import Subtitle from './subtitle'
import AddPerson from './add-person'
import AddPersonForm from './add-person-form';

import { connect } from 'react-redux'

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
                <div>
                    <AddPersonForm/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    {
                        this.props.person.map((item, index) =>
                            <div key={index}>
                            <AddPerson name={item.name} lastSeen={item.lastSeen} dateSeen={item.dateSeen} image={item.image} />
                            </div>
                        )
                    }
                    </div>
                    
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        person: state.person
    }
}

export default connect(MapStateToProps)(PeopleList)