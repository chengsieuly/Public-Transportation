import headers from '../../../config/headers';

import React from 'react';
import Helmet from 'react-helmet';

// Material UI
import AppBar from 'material-ui/AppBar';

import {
  FormContainer
} from 'containers';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Helmet {...headers} />
        <AppBar
          title="Get Schedules for LA Metro"
          iconClassNameLeft="fa fa-bus"
          zDepth={2}>
        </AppBar>
        <FormContainer />
      </div>
    )
  }
}
