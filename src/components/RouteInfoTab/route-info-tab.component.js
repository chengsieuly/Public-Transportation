import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { updateSelectedBusStop } from 'redux/modules/FormBusStops/actions';

@connect(
  state => ({
    selectedRoute: state.formBusSelectReducer.selectedRoute,
    runs: state.formBusSelectReducer.runs,
    stopSequence: state.formBusSelectReducer.stopSequence
  }), {updateSelectedBusStop}
)

export default class RouteInfoTabComponent extends React.Component {
  static propTypes = {
    updateSelectedBusStop: React.PropTypes.func,
    selectedRoute: React.PropTypes.object,
    runs: React.PropTypes.arrayOf(React.PropTypes.object),
    stopSequence: React.PropTypes.arrayOf(React.PropTypes.object)
  }

  handleStopSequenceClick(sequence) {
    this.props.updateSelectedBusStop(sequence);
  }

  render() {
    const { updateSelectedBusStop, selectedRoute, runs, stopSequence } = this.props;
    return (
      <div>
        { selectedRoute.id
          ? <Paper zDepth={0}>
              <h4>
                {selectedRoute.display_name}
              </h4>
              This route runs...
              {
                runs.map((run, i) => {
                  return <p key={i}>{run.display_name}</p>
                })
              }
              <br/>
              Stop sequence:
              {
                stopSequence.map((sequence, i) => {
                  return <p onClick={this.handleStopSequenceClick.bind(this, sequence)}
                            key={i}
                            style={{cursor: 'pointer'}} >
                            {`${i+1}. ${sequence.display_name}`}
                          </p>
                })
              }
            </Paper>
          : null
        }
      </div>
    )
  }
}