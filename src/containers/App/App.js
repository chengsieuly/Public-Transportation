import React from 'react';
import Helmet from 'react-helmet';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

import headers from '../../../config/headers';

export default class App extends React.Component {
  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <Helmet {...headers} />
        <AppBar
          title="Get Schedules for Metro"
          iconClassNameLeft="fa fa-train"
          zDepth={2}>
        </AppBar>
      </div>
    )
  }
}
