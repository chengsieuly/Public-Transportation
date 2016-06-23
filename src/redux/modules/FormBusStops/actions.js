import {
  FETCH_BUS_STOPS_REQUEST,
  FETCH_BUS_STOPS_SUCCESS,
  FETCH_BUS_STOPS_FAILURE
} from './constants';

export function fetchBusStops(bus) {
  return function(dispatch) {
    return fetch(`http://api.metro.net/agencies/lametro/routes/${bus.id}/stops`)
            .then(stops => {
              dispatch(fetchBusStopsRequest());
              return stops.json();
            })
            .then(stopsInJSON => {
              stopsInJSON.items.sort(function(a,b) {return (a.display_name > b.display_name) ? 1 : ((b.display_name > a.display_name) ? -1 : 0);} );
              dispatch(fetchBusStopsSuccess(stopsInJSON.items));
            })
            .catch(() => dispatch(fetchBusStopsFailure()));
  }
}

export function fetchBusStopsRequest() {
  return {
    type: FETCH_BUS_STOPS_REQUEST,
    isFetching: true
  }
}

export function fetchBusStopsSuccess(stops) {
  return {
    type: FETCH_BUS_STOPS_SUCCESS,
    isFetching: false,
    success: stops
  }
}

export function fetchBusStopsFailure() {
  return {
    type: FETCH_BUS_STOPS_FAILURE,
    error: 'Error requesting bus stops',
    isFetching: false
  }
}
