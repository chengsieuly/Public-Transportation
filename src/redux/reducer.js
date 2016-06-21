import { combineReducers } from 'redux';

import {
  formBusSelectReducer,
  formContainerReducer
} from './modules/reducer';

export default combineReducers({
  formBusSelectReducer,
  formContainerReducer
});
