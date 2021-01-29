import '../node_modules/focus-visible/dist/focus-visible';
import './scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import reducer from './store/reducer';

import App from './components/App';

const store = createStore(reducer, compose(
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
     <Provider store={store}>
          <App />
     </Provider>, 
     document.getElementById('root')
     );
     