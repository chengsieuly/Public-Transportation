import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormContainer/actions';

import AutoComplete from 'material-ui/AutoComplete';

@connect(
  state => ({
    trains: state.formContainerReducer.trains
  }),
  dispatch => bindActionCreators(actions, dispatch)
)

export default class FormTrainSelectComponent extends React.Component {
  static propTypes = {
    trains: React.PropTypes.arrayOf(React.PropTypes.string)
  }

  validateInput(train) {
    return this.props.trains.includes(train);
  }

  handleUpdateInput(train) {
    if (!this.validateInput(train)) return;

    if (this.props.inputType === 'departure') this.props.updateSelectedDepartureTrain(train);
    else if (this.props.inputType === 'arrival') this.props.updateSelectedArrivalTrain(train);
  }

  render() {
    return (
      <AutoComplete {...this.props}
        dataSource={this.props.trains}
        filter={AutoComplete.caseInsensitiveFilter}
        fullWidth={true}
        hintText="Select Train"
        onUpdateInput={this.handleUpdateInput.bind(this)}
        onNewRequest={this.handleUpdateInput.bind(this)} />
    )
  }
}
