import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCEEDED} from '../constants/user-info'

import { login } from "../types/login";

const INITIAL_STATE: login = {
  openid: "",
  token: "",
}

export default function login (state = INITIAL_STATE, action) {
  switch (action.type) {

    case LOGIN_REQUESTED:
      return {
        ...state,
      }

     case LOGIN_SUCCEEDED:
       return {
         ...state,
       }

     case LOGIN_FAILED:
       return {

      }
     default:
       return state
  }
}
