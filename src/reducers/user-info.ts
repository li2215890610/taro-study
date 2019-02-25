import { 
  GET_USER_INFO_FAILED, 
  GET_USER_INFO_REQUESTED, 
  GET_USER_INFO_SUCCEEDED,
} from '../constants/user-info';

const INITIAL_STATE = {
  
}

export default function userInfo (state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_USER_INFO_REQUESTED:
      return {
        ...state,
      }

     case GET_USER_INFO_SUCCEEDED:
       return {
         ...state,
       }

     case GET_USER_INFO_FAILED:
       return {

      }
     default:
       return state
  }
}
