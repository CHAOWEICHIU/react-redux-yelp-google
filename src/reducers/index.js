import { combineReducers } from 'redux';
import {
  GET_CURRENT_LOCATION,
  FETCH_PLACES,
  ADD_ONE,
  SAVE_TO_COLLECTION
} from '../actions/types'

import { reducer as formReducer } from 'redux-form'

const currentLocation = function(state='Get Current Location', action){
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      let result = action.payload.results[0]
        , locationCity = result.address_components[2].long_name
        , locationState = result.address_components[3].short_name
      return `${locationCity}, ${locationState}`
    default:
      return state
  }
}

const activeNum = function(state=0,action){
  switch (action.type) {
    case ADD_ONE:
      return state + 1
    default:
      return state
  }
}

const places = function(state=[], action){
  switch (action.type) {
    case FETCH_PLACES:
      return [...state, ...action.payload.businesses]
    default:
      return state
  }
}

const collection = function(state=[], action){
  switch (action.type) {
    case SAVE_TO_COLLECTION:
      console.log('hit!')
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
