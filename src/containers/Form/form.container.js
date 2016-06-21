import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormContainer/actions';

import {
  FormBusRoutesComponent,
  FormBusSelectComponent
} from 'components';

@connect(
  state => ({}),
  dispatch => bindActionCreators(actions, dispatch)
)

class FormContainer extends React.Component {
  static propTypes = {
    fetchBusNames: React.PropTypes.func.isRequired,
    fetchBusNamesRequest: React.PropTypes.func.isRequired,
    fetchBusNamesFailed: React.PropTypes.func.isRequired,
    fetchBusNamesSucceeded: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusNames();
  }

  render() {
    return (
      <div>
        <FormBusSelectComponent
          floatingLabelText="Bus Route Number" />
        <FormBusRoutesComponent />
      </div>
    );
  }
}

export default FormContainer;
