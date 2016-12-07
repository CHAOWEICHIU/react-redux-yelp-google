import React, { Component } from 'react'
import axios from 'axios'
import { getCurrentLocation } from '../actions'
import { connect } from 'react-redux'

class Footer extends Component{
  getLocation(){
    const { getCurrentLocation } = this.props
    // Get internal latitude, longitude, then call action => getCurrentLocation
    navigator
      .geolocation
      .getCurrentPosition(({coords:{latitude, longitude}})=>
                getCurrentLocation({latitude, longitude}))
  }
  render(){
    let className = 'btn btn-block active btn-danger sharp custom-header-btn'
    return (
      <nav className="nav navbar-fixed-bottom">
      <button
        onClick={this.getLocation.bind(this)}
        className={className}>{this.props.currentLocation}</button>
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
