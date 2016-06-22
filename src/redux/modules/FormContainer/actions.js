import {
  FETCH_BUS_NAMES_REQUEST,
  FETCH_BUS_NAMES_FAILURE,
  FETCH_BUS_NAMES_SUCCESS
} from './constants';

export function fetchBusNames() {
  return function (dispatch) {
    return fetch('http://api.metro.net/agencies/lametro/routes/')
            .then(buses => {
              dispatch(fetchBusNamesRequest());
              return buses.json();
            })
            .then(busesInJSON => {
              dispatch(fetchBusNamesSucceeded(busesInJSON.items));
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
    success: buses
  }
}
