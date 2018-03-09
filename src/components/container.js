import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'

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
          <Route exact path='/' component={ Notes } />
          <Route path='/people' component={ PeopleList } />

        {/* <PeopleList/> */}
      </div>
    )
  }
}

export default Container;
