import {
  UPDATE_SELECTED_ROUTE
} from './constants';

export function updateSelectedRoute(bus) {
  return {
    type: UPDATE_SELECTED_ROUTE,
    selectedRoute: bus
  }
}
