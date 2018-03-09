import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-right">
        <div className="container-fluid">
          
          <ul className="nav navbar-nav">
            <li><Link to="/">Notes</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/evidence">Evidence</Link></li>
            
          </ul>
        </div>
      </nav>
    )
  }



}

export default Menu;
