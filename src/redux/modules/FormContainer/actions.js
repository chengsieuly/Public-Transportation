import {
  FETCH_BUS_NAMES_REQUEST,
  FETCH_BUS_NAMES_FAILURE,
  FETCH_BUS_NAMES_SUCCESS,
  UPDATE_SELECTED_ROUTE
} from './constants';

export function fetchBusNames() {
  return function (dispatch) {
    return fetch('http://api.metro.net/agencies/lametro/routes/')
            .then(buses => {
              dispatch(fetchBusNamesRequest());
              return buses.json();
            })
            .then(busesInJSON => {
              let listOfBuses = [];
              busesInJSON.items.map(bus => listOfBuses.push(bus.display_name));
              dispatch(fetchBusNamesSucceeded(listOfBuses));
            })
            .catch(()=> dispatch(fetchBusNamesFailed()));
  };
}

export function fetchBusNamesRequest() {
  return {
    type: FETCH_BUS_NAMES_REQUEST,
    isFetching: true
  }
}

export function fetchBusNamesFailed() {
  return {
    type: FETCH_BUS_NAMES_FAILURE,
    isFetching: false,
    error: 'Failed to fetch bus data'
  }
}

export function fetchBusNamesSucceeded(buses) {
  return {
    type: FETCH_BUS_NAMES_SUCCESS,
    isFetching: false,
    buses: buses
  }
}

export function updateSelectedRoute(bus) {
  return {
    type: UPDATE_SELECTED_ROUTE,
    selectedDepartureBus: bus
  }
}
