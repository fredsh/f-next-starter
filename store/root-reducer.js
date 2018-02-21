import { createStore, applyMiddleware } from 'redux'

/*
 *  /!\ combineReducers need to be swapped if using or not Immutable
 */
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'



import { clockReducer } from 'services/clock'

const rootReducer = combineReducers({
  clock: clockReducer
})

export default rootReducer;