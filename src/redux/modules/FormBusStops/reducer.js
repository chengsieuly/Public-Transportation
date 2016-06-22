import {
  FETCH_BUS_STOPS_REQUEST,
  FETCH_BUS_STOPS_SUCCESS,
  FETCH_BUS_STOPS_FAILURE
} from './constants';

const initialState = {
  isFetching: false,
  stops: []
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
    default:
      return state
  }
}
