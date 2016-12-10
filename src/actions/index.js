import axios from 'axios'
import {
  GET_CURRENT_LOCATION,
  FETCH_PLACES,
  ADD_ONE,
  SAVE_TO_COLLECTION
} from './types'
import qs from 'qs'

export const saveToCollection = place => ({
  type: SAVE_TO_COLLECTION,
  payload: place
})

export const addOne = () => ({
    type: ADD_ONE
})

export const getCurrentLocation = ({latitude, longitude}) => {
  const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'
      , KEY = 'AIzaSyBfF1EwJGIk3iq8UgcMxXVvWmy3JQrCuXA' //TODO tkae this part to config
      , promise = axios.get(`${ROOT_URL}latlng=${latitude},${longitude}&key=${KEY}`)
  return {
    type: GET_CURRENT_LOCATION,
    payload: promise
  }
}

export const fetchPlaces = businesses=>{
  return {
      type: FETCH_PLACES,
      payload: businesses
  }
}
