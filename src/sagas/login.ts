import { takeLatest, call, put } from 'redux-saga/effects';

import Taro from '@tarojs/taro';

import requestLogin from '../servers/login';

import { LOGIN_REQUESTED, LOGIN_FAILED } from "../constants/login";

export function* login() {
  try {

    const getCodeResult = yield Taro.login();

    const loginResult =  yield call(requestLogin.requestLogin, { code: getCodeResult.code },{})
    
    yield put({ type: LOGIN_REQUESTED, payload: loginResult });

  } catch (e) {

    yield put({ type: LOGIN_FAILED, payload: { message: e.errMsg || e.message } });
  }
}

export default function* loginSaga() {

  yield takeLatest('LOGIN_REQUESTED', login);
}