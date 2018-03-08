import React, { Component } from 'react';
import Title from './title-bar'
import Menu from './menu'

class Evidence extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12 continer-fluid">
                    <Title title="Detective App" />
                    <Menu />

                </div>
                <div className="col-md-12 continer-fluid">
                    <h3 className="pull-left">Evidence</h3>
                    <button id="button-add" className="pull-left btn btn-primary">Log Evidence</button>

                </div>

                <div>
                    <table className="table table-bordered table-responsive">
                        <thead>
                            <tr>

                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>

                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>

                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Evidence;