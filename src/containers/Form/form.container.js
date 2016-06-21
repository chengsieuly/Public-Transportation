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
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://api.metro.net/agencies/lametro/routes/')
      .then(response => {
        this.updateState('fetching');
        return response.json();
      })
      .then(responseInJSON => {
        this.updateState('succeeded', responseInJSON);
      })
      .catch(() => {
        this.updateState('failed')
      });
  }

  updateState(fetchMode, response) {
    switch (fetchMode) {
      case 'fetching':
        return this.props.fetchTrainNames();
      case 'succeeded':
        let listOfTrains = [];
        response.items.map(train => listOfTrains.push(train.display_name));
        return this.props.fetchTrainNamesSucceeded(listOfTrains);
      case 'failed':
        return this.props.fetchTrainNamesFailed();
      default:
        return this.props.fetchTrainNames();
    }
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

FormContainer.propTypes = {
  trains: React.PropTypes.arrayOf(React.PropTypes.string),
  fetchTrainNames: React.PropTypes.func.isRequired,
  fetchTrainNamesFailed: React.PropTypes.func.isRequired,
  fetchTrainNamesSucceeded: React.PropTypes.func.inRequired
};

export default FormContainer;
