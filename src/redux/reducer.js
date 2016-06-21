import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import {
  formContainerReducer
} from './modules/reducer';

export default combineReducers({
  form,
  formContainerReducer
});
