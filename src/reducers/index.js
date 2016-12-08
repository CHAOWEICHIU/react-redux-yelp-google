import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import places from './places'
import currentLocation from './current_location'
import activeNum from './active_num'
import collection from './collection'

const rootReducer = combineReducers({
  currentLocation,
  places,
  activeNum,
  collection,
  form:formReducer
})

export default rootReducer
