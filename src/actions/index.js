import { GET_CURRENT_LOCATION } from './types'
import axios from 'axios'

export function getCurrentLocation({latitude, longitude}){
  const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'
      , KEY = 'AIzaSyBfF1EwJGIk3iq8UgcMxXVvWmy3JQrCuXA'
      , promise = axios.get(`${ROOT_URL}latlng=${latitude},${longitude}&key=${KEY}`)
  return {
    type: GET_CURRENT_LOCATION,
    payload: promise
  }
}



// function getLocation(){
//   navigator
//     .geolocation
//     .getCurrentPosition(({coords:{latitude, longitude}})=>getL({latitude, longitude}));
// }
//
// function getL({latitude, longitude}){
//   const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?'
//       , KEY = 'AIzaSyBfF1EwJGIk3iq8UgcMxXVvWmy3JQrCuXA'
//
//   axios.get(`${ROOT_URL}latlng=${latitude},${longitude}&key=${KEY}`)
//     .then(res=>{
//       console.log(res)
//       let thing = res.data.results[0]
//         , city = thing.address_components[2].long_name
//         , state = thing.address_components[3].short_name
//       console.log(city,state)
//     })
// }
