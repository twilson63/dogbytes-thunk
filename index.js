import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import R from 'ramda'

const store = createStore(
  combineReducers({
    color: (state='', action) => {
      switch(action.type) {
        case 'SET_COLOR':
          return action.payload
        default: 
          return state
      }
    },
    colors: (state=[], action) => {
      switch(action.type) {
        case 'ADD_COLOR': 
          return R.append(action.payload, state)
        case 'SET_COLORS':
          return action.payload 
        default: 
          return state
      }
    }
  }), applyMiddleware(thunk))

import App from './app'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))