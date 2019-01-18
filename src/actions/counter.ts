import {
  ADD,
  MINUS,
  ASYNC
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd () {
  return {
    type: ASYNC
  }
}
