import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './mock/mock-server'
import './tools/rem'
import App from './App';
import store from './redux/store';


ReactDOM.render(<Provider store={store}>
  <App />
</Provider> ,document.querySelector('#root'));