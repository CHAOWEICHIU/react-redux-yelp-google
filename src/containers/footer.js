import React, { Component } from 'react'
import axios from 'axios'
import { getCurrentLocation } from '../actions'
import { connect } from 'react-redux'

class Footer extends Component{
  getLocation(){
    const { getCurrentLocation } = this.props
    navigator
      .geolocation
      .getCurrentPosition(({coords:{latitude, longitude}})=>
        getCurrentLocation({latitude, longitude}))
  }
  render(){
    console.log(this.props)
    return (
      <nav className="nav navbar-fixed-bottom">
        <button
          onClick={this.getLocation.bind(this)}
          className="btn btn-block active btn-danger sharp custom-header-btn">Get Current Location</button>
      </nav>
    )
  }
}
function mapStateToProps(state){
  return {
    currentLocation: state.currentLocation
  }
}
export default connect(mapStateToProps, { getCurrentLocation })(Footer)
