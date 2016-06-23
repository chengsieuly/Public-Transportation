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
  return {
    type: UPDATE_SELECTED_ROUTE,
    selectedRoute: bus
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
