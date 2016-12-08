import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  GET_CURRENT_LOCATION,
  FETCH_PLACES,
  ADD_ONE,
  SAVE_TO_COLLECTION
} from '../actions/types'

import places from './places'
import currentLocation from './current_location'

const activeNum = function(state=0,action){
  switch (action.type) {
    case ADD_ONE:
      return state + 1
    default:
      return state
  }
}

const collection = function(state=[], action){
  switch (action.type) {
    case SAVE_TO_COLLECTION:
      return [...state, {...action.payload}]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currentLocation,
  places,
  activeNum,
  collection,
  form:formReducer
});

export default rootReducer;
