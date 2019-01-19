import {
  LOGIN_REQUESTED
} from '../constants/user-info'

export const login = () => {
  return {
    type: LOGIN_REQUESTED
  }
}

