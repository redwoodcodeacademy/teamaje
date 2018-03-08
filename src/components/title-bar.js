import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
        <h1 className="pull-left">{this.props.title}</h1>
    )
  }
}

export default TitleBar;
