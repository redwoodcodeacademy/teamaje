import React from 'react';

class Subtitle extends React.Component {
  render() {
    return (
        <h3 className="pull-left">{this.props.subtitle}</h3>
    )
  }
}

export default Subtitle;
