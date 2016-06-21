import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormContainer/actions';

import {
  FormTrainSelectComponent
} from 'components';

@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)

class FormContainer extends React.Component {
  static propTypes = {
    fetchTrainNames: React.PropTypes.func.isRequired,
    fetchTrainNamesRequest: React.PropTypes.func.isRequired,
    fetchTrainNamesFailed: React.PropTypes.func.isRequired,
    fetchTrainNamesSucceeded: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrainNames();
  }

  render() {
    return (
      <div>
        <FormTrainSelectComponent
          inputType="departure"
          floatingLabelText="Departing from" />
        <FormTrainSelectComponent
          inputType="arrival"
          floatingLabelText="Arriving at" />
      </div>
    );
  }
}

export default FormContainer;
