import React from 'react'
import { connect } from 'react-redux'
// import { getCurrentLocation } from '../actions'

// const locationAPI = getCurrentLocation => {
//   navigator
//     .geolocation
//     .getCurrentPosition(({coords:{latitude, longitude}})=>
//               getCurrentLocation({latitude, longitude}))
// }

const getLocationBtn = ({btnClass, currentLocation}) => {
  return (
    <button
      className={btnClass}>
        {currentLocation}
      </button>
  )
}

const mapStateToProps = ({currentLocation}) => ({currentLocation})
export default connect(mapStateToProps)(getLocationBtn)
