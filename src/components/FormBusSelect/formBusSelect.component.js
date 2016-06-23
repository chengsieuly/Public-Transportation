import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormBusSelect/actions';

import AutoComplete from 'material-ui/AutoComplete';

@connect(
  state => ({
    selectedRoute: state.formBusSelectReducer.selectedRoute,
    stops: state.formBusStopsReducer.stops
  }),
  dispatch => bindActionCreators(actions, dispatch)
)

export default class FormBusSelectComponent extends React.Component {
  static propTypes = {
    clearSelectedRoute: React.PropTypes.func.isRequired,
    getBusStopDetail: React.PropTypes.func.isRequired,
    newSelectedRoute: React.PropTypes.func.isRequired,
    selectedRoute: React.PropTypes.object.isRequired
  }

  handleRouteUpdateInput() {
    if (this.props.selectedRoute.id) {
      this.props.clearSelectedRoute();
    }
  }

  handleRouteNewRequest(bus) {
    this.props.newSelectedRoute(bus);
  }

  render() {
    const { getBusStopDetail, buses, stops } = this.props;
    return (
      <div>
        <AutoComplete {...this.props}
          dataSource={buses}
          dataSourceConfig={{text: 'id', value: 'display_name'}}
          filter={AutoComplete.caseInsensitiveFilter}
          floatingLabelText="Bus Route"
          fullWidth={true}
          hintText="Search Routes"
          onUpdateInput={this.handleRouteUpdateInput.bind(this)}
          onNewRequest={this.handleRouteNewRequest.bind(this)} />
        {this.props.selectedRoute.id
          ? <AutoComplete
              ref="bus_stop"
              dataSource={stops}
              dataSourceConfig={{text: 'display_name', value: 'display_name'}}
              filter={AutoComplete.caseInsensitiveFilter}
              floatingLabelText="Bus Stop"
              fullWidth={true}
              hintText="Select Bus Stop for More Info"
              openOnFocus={true}
              onNewRequest={getBusStopDetail} />
          : null
        }
      </div>
    )
  }
}
