import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormBusSelect/actions';

import AutoComplete from 'material-ui/AutoComplete';

@connect(
  state => ({
    buses: state.formContainerReducer.buses
  }),
  dispatch => bindActionCreators(actions, dispatch)
)

export default class FormBusSelectComponent extends React.Component {
  static propTypes = {
    buses: React.PropTypes.arrayOf(React.PropTypes.string),
    updateSelectedRoute: React.PropTypes.func.isRequired
  }

  validateInput(bus) {
    return this.props.buses.includes(bus);
  }

  handleUpdateInput(bus) {
    if (!this.validateInput(bus)) return;

    this.props.updateSelectedRoute(bus);
  }

  render() {
    return (
      <AutoComplete {...this.props}
        dataSource={this.props.buses}
        filter={AutoComplete.caseInsensitiveFilter}
        fullWidth={true}
        hintText="Select Route"
        onUpdateInput={this.handleUpdateInput.bind(this)}
        onNewRequest={this.handleUpdateInput.bind(this)} />
    )
  }
}
