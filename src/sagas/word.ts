import { call, put, takeLatest, select } from 'redux-saga/effects';

import wordRequest from '../servers/word';

import {
  GET_WORD_LIST_REQUESTED,
  GET_WORD_LIST_SUCCEEDED,
  GET_WORD_LIST_FAILED
} from "../constants/word";

// worker Saga : 将在 SET_USER_INFO_REQUESTED action 被 dispatch 时调用
function* getWordList(action, retry_time = 0) {
  try {

    const newState = yield select();

    //同步发起请求
    let request = yield call(wordRequest.getWordList, {
      payload: {
        ...action.payload,
        maxtime: newState.word_list.query_data.maxtime
      },
    })

    yield put({
      type: GET_WORD_LIST_SUCCEEDED, payload: {
        list: request.list,
        maxtime: request.info.maxtime
      }
    });

  } catch (e) {
    if (e.code === 400 && retry_time < 3) {
      return yield getWordList(action, retry_time + 1);
    }

    yield put({ type: GET_WORD_LIST_FAILED, payload: { message: e.message, page: action.payload.page } });
  }

}

function* Word() {

  /*
  *
    也可以使用 takeLatest
    不允许并发，dispatch 一个 `GET_WORD_LIST_REQUESTED` action 时，
    如果在这之前已经有一个 `GET_WORD_LIST_REQUESTED` action 在处理中，
    那么处理中的 action 会被取消，只会执行当前的
  *
  */
  yield takeLatest(GET_WORD_LIST_REQUESTED, getWordList);

}

export default Word;