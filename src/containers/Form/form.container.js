import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/FormContainer/actions';

import {
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
    return (
      <div>
        <FormBusSelectComponent
          buses={this.props.buses} />
      </div>
    );
  }
}

export default FormContainer;
