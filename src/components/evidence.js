import React, { Component } from 'react';
import Title from './title-bar'
import Menu from './menu'


class Evidence extends Component {
    
    render() {
        return (
            <div>
                
              
                  

                <div className="container">
                    <table className="table table-bordered table-responsive">
                       
                        <tbody>
                            <tr>

                                <td>{this.props.name}</td>
                                <td>{this.props.date}</td>
                                <td>{this.props.location}</td>
                                <td>{this.props.found}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Evidence;