import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { closeBusStopDialog } from 'redux/modules/FormBusStops/actions';

import {
  RouteStopsTabComponent
} from 'components';

@connect(
  state => ({
    selectedRoute: state.formBusSelectReducer.selectedRoute,
    selectedStop: state.formBusStopsReducer.selectedStop,
    selectedStopArrivalTimes: state.formBusStopsReducer.selectedStopArrivalTimes,
    otherRoutesOnStop: state.formBusStopsReducer.otherRoutesOnStop,
    selectedStopBool: state.formBusStopsReducer.selectedStopBool
  }), {closeBusStopDialog}
)

export default class TabDisplayContainer extends React.Component {
  static propTypes = {
    selectedRoute: React.PropTypes.object.isRequired,
    selectedStop: React.PropTypes.object,
    selectedStopArrivalTimes: React.PropTypes.arrayOf(React.PropTypes.object),
    otherRoutesOnStop: React.PropTypes.arrayOf(React.PropTypes.object),
    selectedStopBool: React.PropTypes.bool.isRequired
  }

  render() {
    const {
      closeBusStopDialog,
      selectedRoute,
      selectedStop,
      selectedStopArrivalTimes,
      otherRoutesOnStop,
      selectedStopBool } = this.props;

    var dialogTitleElement;
    var dialogBodyElement;
    if (!selectedStop) {
      dialogTitleElement = null;
      dialogBodyElement = null;
    } else {
      dialogTitleElement = (
        <div>
          <i className="fa fa-envira"></i>{selectedStop.display_name}
        </div>
      );

      dialogBodyElement = (
        <div>
          <a
            href={`https://www.google.com/maps/@${selectedStop.latitude},${selectedStop.longitude},19z`}
            target="_blank"
            style={{textDecoration: 'none'}}>
            <i className="fa fa-map-marker" aria-hidden="true"></i> Open with Maps
          </a>
          <br/>
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          {
            selectedStopArrivalTimes.map((time, i) => {
              return <span key={i}> {time.minutes} </span>
            })
          }
          <span> minutes</span>
          <br/>
          { otherRoutesOnStop.map((route, i) => {
            return (
              <div key={i}>
                <i className="fa fa-bus" aria-hidden="true"></i>
                <span> {route.display_name} </span>
              </div>
            )
          })}
        </div>
      )
    }

    return (
     <div>
       <Dialog
        title={dialogTitleElement}
        actions={
          <FlatButton
            label="Back"
            primary={true}
            onTouchTap={closeBusStopDialog} />
        }
        modal={true}
        open={selectedStopBool} >
        {dialogBodyElement}
       </Dialog>
       <Tabs>
         <Tab
            icon={<i className="fa fa-envira" />}
            label="Stops" >
            <RouteStopsTabComponent />
         </Tab>
       </Tabs>
     </div>
    )
  }
}
