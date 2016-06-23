import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import {
  RouteStopsTabComponent
} from 'components';

export default class TabDisplayContainer extends React.Component {
  render() {
   return (
     <Tabs>
       <Tab
          icon={<i className="fa fa-envira" />}
          label="Stops" >
          <RouteStopsTabComponent />
       </Tab>
     </Tabs>
   )
  }
}
