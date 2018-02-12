import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import reducers from './reducers';
import initialState from './reducers/initialState';
import registerServiceWorker from './registerServiceWorker';
import { loadUsers } from './actions/userActions';
import './index.css';

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
