import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import {
  formContainerReducer
} from './modules/reducer';

export default combineReducers({
  form,
  formContainerReducer
});
