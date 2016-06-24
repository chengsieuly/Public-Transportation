import {
  CLEAR_SELECTED_ROUTE,
  UPDATE_SELECTED_ROUTE
} from './constants';

import { fetchBusStops, updateSelectedBusStop } from '../FormBusStops/actions';

export function newSelectedRoute(bus) {
  return function(dispatch) {
    dispatch(updateSelectedRoute(bus));
    dispatch(fetchBusStops(bus));
  }
}

export function updateSelectedRoute(bus) {
  var runs;
  var stopSequence;
  return function(dispatch) {
    return fetch(`http://api.metro.net/agencies/lametro/routes/${bus.id}/sequence/`)
              .then(sequence => sequence.json())
              .then(sequence => {
                stopSequence = sequence;
                return fetch(`http://api.metro.net/agencies/lametro/routes/${bus.id}/runs/`)
                          .then(runOnRoutes => runOnRoutes.json())
              })
              .then(runOnRoutes => {
                dispatch({
                  type: UPDATE_SELECTED_ROUTE,
                  selectedRoute: bus,
                  runs: runOnRoutes.items,
                  stopSequence: stopSequence.items
                });
              })
              .catch(() => {
                //TODO: Add error
              })
  }
}

export function clearSelectedRoute() {
  return {
    type: CLEAR_SELECTED_ROUTE
  }
}

export function getBusStopDetail(selectedStop) {
  return function(dispatch) {
    dispatch(updateSelectedBusStop(selectedStop));
  }
}
