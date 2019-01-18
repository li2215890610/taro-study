import { createStore, applyMiddleware } from 'redux'

import  createSagaMiddleware from "redux-saga";

import rootReducer from '../reducers'

import counterSagas from "../sagas/counter";


const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run(counterSagas)

  return store
}
