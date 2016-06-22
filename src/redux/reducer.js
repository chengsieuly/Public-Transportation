import { combineReducers } from 'redux';

import {
  formBusSelectReducer,
  formBusStopsReducer,
  formContainerReducer
} from './modules/reducer';

export default combineReducers({
  formBusSelectReducer,
  formBusStopsReducer,
  formContainerReducer
});
