import '../node_modules/focus-visible/dist/focus-visible';
import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from './store/reducer';

import App from './components/App';

// const store = createStore(reducer);

ReactDOM.render(
     <App />, 
     document.getElementById('root')
     );
     