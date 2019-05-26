import {
  GET_WORD_LIST_REQUESTED
} from '../constants/word';

export const getWordList = (payload) => {
  return {
    type: GET_WORD_LIST_REQUESTED,
    payload
  }
}



