import axios from 'axios'
import {
  GET_CURRENT_LOCATION,
  FETCH_PLACES,
  ADD_ONE
} from './types'

export function addOne(){
  return {
    type: ADD_ONE
  }
}

export function getCurrentLocation({latitude, longitude}){
  const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'
      , KEY = 'AIzaSyBfF1EwJGIk3iq8UgcMxXVvWmy3JQrCuXA'
      , promise = axios.get(`${ROOT_URL}latlng=${latitude},${longitude}&key=${KEY}`)
  return {
    type: GET_CURRENT_LOCATION,
    payload: promise
  }
}

export function fetchPlaces({term, location}){
  const ROOT_URL = 'http://localhost:3000/yelp/businesses/search?'
      , promise = axios.get(`${ROOT_URL}term=${term}&location=${location}`)
  return {
      type: FETCH_PLACES,
      payload: promise
  }
}
