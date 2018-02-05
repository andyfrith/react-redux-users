import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware
 } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import reducers from './reducers';
import initialState from './reducers/initialState';
import registerServiceWorker from './registerServiceWorker';
import {loadUsers} from './actions/userActions';
import './index.css';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);

store.dispatch(loadUsers());

render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
