import {
  UPDATE_SELECTED_ROUTE
} from './constants';

const initialState = {
  selectedRoute: ''
};

const reducer = (state = initialState, action={}) => {
  switch (action.type) {
    case UPDATE_SELECTED_ROUTE:
      return Object.assign({}, state, {
        selectedRoute: action.selectedRoute
      });
    default:
      return state;
  }
}

export default reducer;
