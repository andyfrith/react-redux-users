import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import throttle from 'lodash/throttle';
import App from './components/app';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';

injectGlobal`
  body {
    background-color: antiquewhite;
  }
`;

const persistedState = loadState();

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(...middlewares)
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  })
);

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
