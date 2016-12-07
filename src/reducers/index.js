import { combineReducers } from 'redux';
import { GET_CURRENT_LOCATION } from '../actions/types'

const currentLocation = function(state='', action){
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

const rootReducer = combineReducers({
  currentLocation
});

export default rootReducer;
