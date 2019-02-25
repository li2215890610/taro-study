import { combineReducers } from 'redux';

import user_login from './login';

import user_info from "./user-info";

export default combineReducers({
  user_login,
  user_info
})
