import { combineReducers } from 'redux';

import user_login from './login';

import user_info from "./user-info";

import word_list from "./word-list";

export default combineReducers({
  user_login,
  user_info,
  word_list
})
