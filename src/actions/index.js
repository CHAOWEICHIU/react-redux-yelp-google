import axios from 'axios'
import {
  GET_CURRENT_LOCATION,
  FETCH_PLACES,
  ADD_ONE,
  SAVE_TO_COLLECTION
} from './types'
import qs from 'qs'

export function saveToCollection(place){
  console.log('action creator=>',place)
  return {
    type: SAVE_TO_COLLECTION,
    payload: place
  }
}

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

export function fetchPlaces({term, radius}, currentLocation){
  const ROOT_URL = 'https://ccw-data-center.herokuapp.com/yelp/businesses/search?'
      , queryString = qs.stringify({
          term,
          radius,
          location: currentLocation
        })
      , promise = axios.get(`${ROOT_URL}${queryString}`)
      console.log('qs',queryString)
      console.log('url=>',`${ROOT_URL}${queryString}`)
  return {
      type: FETCH_PLACES,
      payload: promise
  }
}
