import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector('#root')
);


