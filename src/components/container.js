import React from 'react';
import TitleBar from './title-bar';
import Menu from './menu'
import Notes from './notes'
import PeopleList from './people-list'


class Container extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <TitleBar title="Detective App" />
            <Menu />
          </div>
        {/* <Notes /> */}
        <PeopleList/>
      </div>
    )
  }
}

export default Container;
