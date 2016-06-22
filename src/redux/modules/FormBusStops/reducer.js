const FETCH_BUS_STOPS_REQUEST = 'fetch bus stops';
const FETCH_BUS_STOPS_SUCCESS = 'fetch bus stops success';
const FETCH_BUS_STOPS_FAILURE = 'fetch bus stops failed';

const initialState = {
  stops: []
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_BUS_STOPS_REQUEST:
      return Object.assign({}, state, {
        stops: action.stops
      })
    default:
      return state
  }
}

export function fetchBusStops(bus) {
  return function(dispatch) {
    return fetch(`http://api.metro.net/agencies/lametro/routes/${bus.id}/stops`)
            .then(stops => {
              return stops.json();
            })
            .then(stopsInJSON => {
              dispatch(fetchBusStopsRequest(stopsInJSON.items));
            })
            .catch(() => console.log('failed'));
  }
}

export function fetchBusStopsRequest(stops) {
  return {
    type: FETCH_BUS_STOPS_REQUEST,
    stops: stops
  }
}
