import React from 'react';
import { hydrate } from 'react-dom';
// import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import '../scss/main.scss';

hydrate(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector('#app')
);