import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  AppContainer
} from 'containers';

render((
  <MuiThemeProvider>
    <AppContainer />
  </MuiThemeProvider>
), document.getElementById('app'));
