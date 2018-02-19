import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import configureStore from './configureStore';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    background-color: antiquewhite;
    background: url('/assets/img/bg.jpg');
  }
`;

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById( 'root' ),
);

registerServiceWorker();
