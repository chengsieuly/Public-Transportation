import {
  FETCH_BUS_STOPS_REQUEST,
  FETCH_BUS_STOPS_SUCCESS,
  FETCH_BUS_STOPS_FAILURE,
  CLOSE_BUS_STOP_DIALOG,
  UPDATE_SELECTED_BUS_STOP
} from './constants';

const initialState = {
  isFetching: false,
  selectedStop: {},
  selectedStopArrivalTimes: [],
  selectedStopBool: false,
  stops: [],
  otherRoutesOnStop: []
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_BUS_STOPS_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
    case FETCH_BUS_STOPS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        stops: action.success
      })
    case FETCH_BUS_STOPS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        isFetching: action.isFetching
      })
    case CLOSE_BUS_STOP_DIALOG:
      return Object.assign({}, state, {
        selectedStopBool: false
      })
    case UPDATE_SELECTED_BUS_STOP:
      return Object.assign({}, state, {
        selectedStop: action.selectedStop,
        selectedStopArrivalTimes: action.arrivalTimes,
        selectedStopBool: true,
        otherRoutesOnStop: action.otherRoutesOnStop
      })
    default:
      return state
  }
}
