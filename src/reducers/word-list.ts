import {
  GET_WORD_LIST_FAILED,
  GET_WORD_LIST_REQUESTED,
  GET_WORD_LIST_SUCCEEDED
} from '../constants/word'


import { wordList } from '../types/word-list'

const INITIAL_STATE: wordList = {
  list: [],
  ing: false,
  end: false,
  page: 1,
  err: false,
  message: null,
  page_size: 20,
  query_data: {
    maxtime: '',
    a: 'newlist',
    c: 'data',
    type:'29'
  }
}

export default function wordList(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_WORD_LIST_REQUESTED:
      return {
        ...state,
        ing: true,
        end: false,
        err: false,
        message: null
      }

    case GET_WORD_LIST_SUCCEEDED:

      return {
        ...state,
        ing: false,
        end: action.payload.list.length < state.page_size,
        err: false,
        page: action.payload.page,
        query_data:{
          ...state.query_data,
          maxtime: action.payload.maxtime
        },
        list: action.payload.page === 1 ? action.payload.list : [...state.list, ...action.payload.list],
      }

    case GET_WORD_LIST_FAILED:
      return {
        ...state,
        ing: false,
        end: false,
        err: true,
        page: action.payload.page,
        message: action.payload.message
      }

    default:
      return state
  }
}
