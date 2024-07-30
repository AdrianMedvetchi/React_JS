import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ThemeToggle from './ThemeToggle';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello, React!</h1>
    <ThemeToggle />
  </Provider>,
  document.getElementById('root')
);