import {
  FETCH_BUS_STOPS_REQUEST,
  FETCH_BUS_STOPS_SUCCESS,
  FETCH_BUS_STOPS_FAILURE,
  CLOSE_BUS_STOP_DIALOG,
  UPDATE_SELECTED_BUS_STOP
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

export function closeBusStopDialog() {
  return {
    type: CLOSE_BUS_STOP_DIALOG
  }
}

export function updateSelectedBusStop(row) {
  return function(dispatch, getState) {

    var selectedStopInfo;
    if (Array.isArray(row)) {
      selectedStopInfo = getState().formBusStopsReducer.stops[row[0]];
    } else {
      selectedStopInfo = row;
    }

    // Material-UI table firing action twice. Once on open and once on close.
    // So, 'selectedStopInfo' becomes undefined and logs error
    // This is a quick fix
    if (!selectedStopInfo) return;

    var predictions;
    var otherRoutesOnStop;
    return fetch(`http://api.metro.net/agencies/lametro/stops/${selectedStopInfo.id}/predictions/`)
              .then(prediction => {
                return prediction.json();
              })
              .then((predictionInJSON) => {
                predictions = predictionInJSON;
                return fetch(`http://api.metro.net/agencies/lametro/stops/${selectedStopInfo.id}/routes/`)
                          .then(routesOnStop => {
                            return routesOnStop.json();
                          })
                          .then(routesOnStopInJSON => {
                            otherRoutesOnStop = routesOnStopInJSON;
                            dispatch({
                              type: UPDATE_SELECTED_BUS_STOP,
                              selectedStop: selectedStopInfo,
                              arrivalTimes: predictions.items,
                              otherRoutesOnStop: otherRoutesOnStop.items
                            })
                          })
              })
              // TODO: error catching
  }
}
