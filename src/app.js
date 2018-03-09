import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS 
import EvidenceForm from './components/evidence-form'
import Evidence from './components/evidence'
import Container from './components/container'
import store from './redux/store'
import { Provider } from 'react-redux'

//CSS
import './styles/styles.css'
import evidenceForm from './components/evidence-form';

ReactDOM.render( (<Provider store={ store }>
<EvidenceForm />
</Provider>), document.getElementById('app'))
