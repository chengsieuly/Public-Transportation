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
    newSelectedRoute: React.PropTypes.func.isRequired,
    selectedRoute: React.PropTypes.object.isRequired
  }

  handleUpdateInput() {
    if (this.props.selectedRoute.id) {
      this.props.clearSelectedRoute();
    }
  }

  handleNewRequest(bus) {
    this.props.newSelectedRoute(bus);
  }

  render() {
    const { buses, stops } = this.props;
    return (
      <div>
        <AutoComplete {...this.props}
          dataSource={buses}
          dataSourceConfig={{text: 'display_name', value: 'display_name'}}
          filter={AutoComplete.caseInsensitiveFilter}
          floatingLabelText="Bus Route"
          fullWidth={true}
          hintText="Search Routes"
          onUpdateInput={this.handleUpdateInput.bind(this)}
          onNewRequest={this.handleNewRequest.bind(this)} />
        {this.props.selectedRoute.id
          ? <AutoComplete
              ref="bus_stop"
              dataSource={stops}
              dataSourceConfig={{text: 'display_name', value: 'display_name'}}
              filter={AutoComplete.caseInsensitiveFilter}
              floatingLabelText="Bus Stop"
              fullWidth={true}
              hintText="Select Stop"
              openOnFocus={true} />
          : null
        }
      </div>
    )
  }
}
