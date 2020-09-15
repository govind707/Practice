import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store} App />, document.getElementById('root'));
registerServiceWorker();
