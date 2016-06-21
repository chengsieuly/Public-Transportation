import {
  FETCH_TRAIN_NAMES_REQUEST,
  FETCH_TRAIN_NAMES_FAILURE,
  FETCH_TRAIN_NAMES_SUCCESS,
  UPDATE_SELECTED_DEPARTURE_TRAIN,
  UPDATE_SELECTED_ARRIVAL_TRAIN
} from './constants';

export function fetchTrainNames() {
  return function (dispatch) {
    return fetch('http://api.metro.net/agencies/lametro/routes/')
            .then(trains => {
              dispatch(fetchTrainNamesRequest());
              return trains.json();
            })
            .then(trainsInJSON => {
              let listOfTrains = [];
              trainsInJSON.items.map(train => listOfTrains.push(train.display_name));
              dispatch(fetchTrainNamesSucceeded(listOfTrains));
            })
            .catch(()=> dispatch(fetchTrainNamesFailed()));
  };
}

export function fetchTrainNamesRequest() {
  return {
    type: FETCH_TRAIN_NAMES_REQUEST,
    isFetching: true
  }
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
