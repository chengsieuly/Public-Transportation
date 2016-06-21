import {
  FETCH_TRAIN_NAMES_REQUEST,
  FETCH_TRAIN_NAMES_FAILURE,
  FETCH_TRAIN_NAMES_SUCCESS,
  UPDATE_SELECTED_DEPARTURE_TRAIN,
  UPDATE_SELECTED_ARRIVAL_TRAIN
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
  trains: [],
  selectedDepartureTrain: '',
  selectedArrivalTrain: ''
};

const reducer = (state = initialState, action={}) => {
  switch (action.type) {
    case FETCH_TRAIN_NAMES_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case FETCH_TRAIN_NAMES_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error
      });
    case FETCH_TRAIN_NAMES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        trains: action.trains
      });
    case UPDATE_SELECTED_DEPARTURE_TRAIN:
      return Object.assign({}, state, {
        selectedDepartureTrain: action.selectedDepartureTrain
      });
    case UPDATE_SELECTED_ARRIVAL_TRAIN:
      return Object.assign({}, state, {
        selectedArrivalrain: action.selectedArrivalTrain
      });
    default:
      return state;
  }
}

export default reducer;
