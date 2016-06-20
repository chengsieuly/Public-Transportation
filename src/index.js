import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  App,
  Form
} from 'containers';

ReactDOM.render((
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
), document.getElementById('app'));
