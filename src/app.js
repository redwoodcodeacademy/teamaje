import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Container from './components/container'
import store from './redux/store'
import { Provider } from 'react-redux'

//CSS
import './styles/styles.css'

ReactDOM.render( (<Provider store={ store }>
<Container />
</Provider>), document.getElementById('app'))
