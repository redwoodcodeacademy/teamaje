import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-right">
        <div className="container-fluid">
          
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Notes</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Evidence</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Menu;
