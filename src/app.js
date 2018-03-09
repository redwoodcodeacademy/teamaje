import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS
import Container from './components/container'
import store from './redux/store'
import { Provider } from 'react-redux'

CSS
import './styles/styles.css'

ReactDOM.render( (<Provider store={ store }>
<BrowserRouter>
<Container />
</BrowserRouter>
</Provider>), document.getElementById('app'))
