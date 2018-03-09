import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// COMPONENTS 
import EvidenceForm from './components/evidence-form'
import Evidence from './components/evidence'
import Container from './components/container'
import store from './redux/store'
import { Provider } from 'react-redux'

CSS
import './styles/styles.css'
import evidenceForm from './components/evidence-form';

ReactDOM.render( (<Provider store={ store }>
<<<<<<< HEAD
<EvidenceForm />
=======
<BrowserRouter>
<Container />
</BrowserRouter>
>>>>>>> cf83764d936124a3876b89ab46a23ce42f84d4f4
</Provider>), document.getElementById('app'))
