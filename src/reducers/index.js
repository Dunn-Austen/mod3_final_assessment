import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { messages } from './messages';

const rootReducer = combineReducers({
  user,
  errorMsg,
  msg
});

export default rootReducer;
