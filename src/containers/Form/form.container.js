import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormContainer/actions';

import {
  FormBusRoutesComponent,
  FormBusSelectComponent
} from 'components';

@connect(
  state => ({
    buses: state.formContainerReducer.buses
  }),
  dispatch => bindActionCreators(actions, dispatch)
)

class FormContainer extends React.Component {
  static propTypes = {
    buses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
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
    const busNames = this.props.buses.map(bus => bus.display_name);
    return (
      <div>
        <FormBusSelectComponent
          floatingLabelText="Bus Route Number" busNames={busNames} />
        <FormBusRoutesComponent />
      </div>
    );
  }
}

export default FormContainer;
