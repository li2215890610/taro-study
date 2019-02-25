import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';

import userRequest from '../servers/user-info';

import { 
  SET_USER_INFO_REQUESTED, 
  SET_USER_INFO_SUCCEEDED, 
  SET_USER_INFO_FAILED, 

  GET_USER_INFO_REQUESTED,
  GET_USER_INFO_SUCCEEDED,
  GET_USER_INFO_FAILED,
} from "../constants/user-info";

import { login} from './login';

// worker Saga : 将在 SET_USER_INFO_REQUESTED action 被 dispatch 时调用
function* getUserInfo(action, retry_time = 0) {
  try {

      const state = yield select();
      if (!state.account.token) {
        yield login();
      }
    
      const newState = yield select();

      //同步发起请求
      let request = yield call(userRequest.getUserInfoRequest,{
        payload:{
          ...action.payload,
        },
      }, newState.account)

      yield put({type: GET_USER_INFO_SUCCEEDED,payload:{
        ...request
      }});

  } catch (e) {
    if (e.code === 401 && retry_time < 3) {
      return yield getUserInfo(action, retry_time + 1);
    }

    yield put({type: GET_USER_INFO_FAILED, message: e.message});
  }

}


// worker Saga : 将在 SET_USER_INFO_REQUESTED action 被 dispatch 时调用
function* setUpdateUserInfo( action, retry_time = 0) {

  try {
    
    const state = yield select();
    if (!state.account.token) {
      yield login();
    }
  
    const newState = yield select();

    //同步发起请求
    let request = yield call(userRequest.setUpdateUserInfoRequest,{
      payload:{
        ...action.payload,
      },
    }, newState.account)

    yield put({type: SET_USER_INFO_SUCCEEDED,payload:{
      ...request
    }});

 } catch (e) {
    if (e.code === 401 && retry_time < 3) {
      return yield setUpdateUserInfo(action, retry_time + 1);
    }

    yield put({type: SET_USER_INFO_FAILED, message: e.message});
 }

}

function* UserInfo() {

  /*
  *
    也可以使用 takeLatest
    不允许并发，dispatch 一个 `SET_USER_INFO_REQUESTED` action 时，
    如果在这之前已经有一个 `SET_USER_INFO_REQUESTED` action 在处理中，
    那么处理中的 action 会被取消，只会执行当前的
  *
  */
  yield takeLatest(SET_USER_INFO_REQUESTED, getUserInfo);

  /*
  *
    在每个 `GET_USER_INFO_REQUESTED` action 被 dispatch 时调用 updateUser
    允许并发（译注：即同时处理多个相同的 action）
  *
  */
  yield takeEvery(GET_USER_INFO_REQUESTED, setUpdateUserInfo);

}

export default UserInfo;