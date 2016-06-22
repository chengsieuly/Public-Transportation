import {
  FETCH_BUS_NAMES_REQUEST,
  FETCH_BUS_NAMES_FAILURE,
  FETCH_BUS_NAMES_SUCCESS
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
  buses: []
};

const reducer = (state = initialState, action={}) => {
  switch (action.type) {
    case FETCH_BUS_NAMES_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case FETCH_BUS_NAMES_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error
      });
    case FETCH_BUS_NAMES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        buses: action.buses
      });
    default:
      return state;
  }
}

export default reducer;
