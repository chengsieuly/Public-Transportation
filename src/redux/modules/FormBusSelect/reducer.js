import {
  CLEAR_SELECTED_ROUTE,
  UPDATE_SELECTED_ROUTE
} from './constants';

const initialState = {
  selectedRoute: {},
  runs: [],
  stopSequence: []
};

const reducer = (state = initialState, action={}) => {
  switch (action.type) {
    case CLEAR_SELECTED_ROUTE:
      return Object.assign({}, state, {
        selectedRoute: {}
      })
    case UPDATE_SELECTED_ROUTE:
      return Object.assign({}, state, {
        selectedRoute: action.selectedRoute,
        runs: action.runs,
        stopSequence: action.stopSequence
      });
    default:
      return state;
  }
}

export default reducer;
