import {
  FETCH_TRAIN_NAMES_REQUEST,
  FETCH_TRAIN_NAMES_FAILURE,
  FETCH_TRAIN_NAMES_SUCCESS,
  UPDATE_SELECTED_DEPARTURE_TRAIN,
  UPDATE_SELECTED_ARRIVAL_TRAIN
} from './constants';

export function fetchTrainNames() {
  return {
    type: FETCH_TRAIN_NAMES_REQUEST,
    isFetching: true
  };
}

export function fetchTrainNamesFailed() {
  return {
    type: FETCH_TRAIN_NAMES_FAILURE,
    isFetching: false,
    error: 'Failed to fetch train data'
  }
}

export function fetchTrainNamesSucceeded(trains) {
  return {
    type: FETCH_TRAIN_NAMES_SUCCESS,
    isFetching: false,
    trains: trains
  }
}

export function updateSelectedDepartureTrain(train) {
  return {
    type: UPDATE_SELECTED_DEPARTURE_TRAIN,
    selectedDepartureTrain: train
  }
}

export function updateSelectedArrivalTrain(train) {
  return {
    type: UPDATE_SELECTED_ARRIVAL_TRAIN,
    selectedArrivalTrain: train
  }
}
