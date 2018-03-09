import React, { Component } from 'react';

class AddPersonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-md-3 text-center formRow">
                <div className="imageStyle form-group">
                    <img src="http://www.pvhc.net/img29/jyfitaoewknixuoeblsj.png" id="image" />
                </div>
               
                    <div className="row formRow">
                        <label htmlFor="imageInput" className="pull-left"> Upload Image: </label>
                        <input type="file" className="" />
                    </div>
           
                <div className="row formRow">
                    <label htmlFor="personName" className="pull-left">Name: </label>
                    <input type="text" className="inputPush" />
                </div>
                <div className="row formRow">
                    <label htmlFor="lastSeen" className="pull-left">Last Seen: </label>
                    <input type="text"  />
                </div>
                <div className="row formRow">
                    <label htmlFor="dateSeen" className="pull-left">Date Seen: </label>
                    <input type="text" />
                </div>
                    <button className="btn btn-primary pull-right col-md-12" id="saveBtn">Save</button>
            </div>
         
          )
    }
}

export default AddPersonForm;