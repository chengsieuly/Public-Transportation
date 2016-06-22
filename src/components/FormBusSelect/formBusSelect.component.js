import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormBusSelect/actions';

import AutoComplete from 'material-ui/AutoComplete';

@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)

export default class FormBusSelectComponent extends React.Component {
  static propTypes = {
    newSelectedRoute: React.PropTypes.func.isRequired
  }

  validateInput(bus) {
    return this.props.busNames.includes(bus);
  }

  handleUpdateInput(bus) {
    if (!this.validateInput(bus)) return;

    this.props.newSelectedRoute(bus);
  }

  render() {
    return (
      <AutoComplete {...this.props}
        dataSource={this.props.busNames}
        filter={AutoComplete.caseInsensitiveFilter}
        fullWidth={true}
        hintText="Select Route"
        onUpdateInput={this.handleUpdateInput.bind(this)}
        onNewRequest={this.handleUpdateInput.bind(this)} />
    )
  }
}
