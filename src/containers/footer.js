import React, { Component } from 'react'
import axios from 'axios'
import { getCurrentLocation, fetchPlaces } from '../actions'
import { connect } from 'react-redux'

class Footer extends Component{
  constructor(props){
    super(props)
    this.state = {
      waitingBtn : false
    }
  }
  getLocation(){
    this.setState({waitingBtn:true})
    const { getCurrentLocation } = this.props
    // Get internal latitude, longitude, then call action => getCurrentLocation
    navigator
      .geolocation
      .getCurrentPosition(({coords:{latitude, longitude}})=>
                getCurrentLocation({latitude, longitude}))
  }
  componentDidUpdate(){
    this.setState({waitingBtn : true})
  }
  render(){
    const { currentLocation } = this.props
    let className = 'btn btn-block active btn-danger sharp custom-header-btn'
    return (
      <nav className="nav navbar-fixed-bottom">
      <button
        disabled={this.state.waitingBtn}
        onClick={this.getLocation.bind(this)}
        className={className}>
          {currentLocation}
        </button>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    currentLocation: state.currentLocation,
    places: state.places
  }
}

export default connect(mapStateToProps, { getCurrentLocation, fetchPlaces })(Footer)
