import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './redux/store';

import {
  AppContainer,
  DevTools
} from 'containers';

const store = configureStore();

const component = (
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>
);

switch (process.env.NODE_ENV) {
  case 'development':
    render((
      <Provider store={store}>
        <div>
          {component}
          <DevTools />
        </div>
      </Provider>
    ), document.getElementById('app'));
    break;
  case 'production':
    render((
      <Provider store={store}>
        {component}
      </Provider>
    ), document.getElementById('app'));
    break;
  default:
    render((
      <Provider store={store}>
        {component}
      </Provider>
    ), document.getElementById('app'));
}
