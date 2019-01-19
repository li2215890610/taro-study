import { createStore, applyMiddleware } from 'redux'

import  createSagaMiddleware from "redux-saga";

import rootReducer from '../reducers'

import userInfoSagas from "../sagas/user-info";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run(userInfoSagas)

  return store
}
