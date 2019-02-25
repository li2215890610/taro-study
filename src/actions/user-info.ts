import {
  LOGIN_REQUESTED
} from '../constants/login';

import { GET_USER_INFO_REQUESTED, SET_USER_INFO_REQUESTED } from "../constants/user-info";

export const login = () => {
  return {
    type: LOGIN_REQUESTED
  }
}


export const getUserInfo = () => {
  return {
    type: GET_USER_INFO_REQUESTED
  }
}


export const setUserInfo = () => {
  return {
    type: SET_USER_INFO_REQUESTED
  }
}

