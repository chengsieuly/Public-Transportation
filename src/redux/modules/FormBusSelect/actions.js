import {
  CLEAR_SELECTED_ROUTE,
  UPDATE_SELECTED_ROUTE
} from './constants';

import { fetchBusStops } from '../FormBusStops/reducer';

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