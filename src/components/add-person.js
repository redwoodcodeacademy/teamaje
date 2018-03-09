import React, { Component } from 'react';


class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="col-md-3 text-center">
                 <div className="imageStyle">
                <img src={ this.props.image } id="image"/>
                </div>
                    <div className="row">
                      <label htmlFor="personName" className="pull-left">Name: </label>
                            <p className="pull-left" id="personName">{ this.props.name}</p>
                    </div>
                    <div className="row">
                      <label htmlFor="lastSeen" className="pull-left">Last Seen: </label>
                             <p className="pull-left" id="lastSeen">{ this.props.lastSeen }</p>
                    </div>
                    <div className="row">
                      <label htmlFor="dateSeen" className="pull-left">Date Seen: </label>
                             <p className="pull-left" id="dateSeen">{ this.props.dateSeen }</p>
                    </div>
            </div>
          )
    }
}
 
export default AddPerson;