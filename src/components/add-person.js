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
                <img src="http://www.pvhc.net/img29/jyfitaoewknixuoeblsj.png" id="image"/>
                </div>
                    <div className="row">
                      <label htmlFor="personName" className="pull-left">Name: </label>
                            <p className="pull-left" id="personName">John Doe</p>
                    </div>
                    <div className="row">
                      <label htmlFor="lastSeen" className="pull-left">Last Seen: </label>
                             <p className="pull-left" id="lastSeen"> Irvine, Ca</p>
                    </div>
                    <div className="row">
                      <label htmlFor="dateSeen" className="pull-left">Date Seen: </label>
                             <p className="pull-left" id="dateSeen"> 01/01/2001</p>
                    </div>
            </div>
          )
    }
}
 
export default AddPerson;