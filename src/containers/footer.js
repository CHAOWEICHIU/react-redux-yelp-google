import React, { Component } from 'react'
import axios from 'axios'
import { getCurrentLocation } from '../actions'
import { connect } from 'react-redux'

class Footer extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const { getCurrentLocation } = this.props
    navigator
      .geolocation
      .getCurrentPosition(({coords:{latitude, longitude}})=>
                getCurrentLocation({latitude, longitude}))
  }
  render(){
    const { currentLocation } = this.props
    let className = 'btn btn-block active btn-danger sharp custom-header-btn'
    return (
      <nav className="nav navbar-fixed-bottom">
      <button
        className={className}>
          {currentLocation}
        </button>
      </nav>
    )
  }
}

const mapStateToProps = ({currentLocation, places}) => ({currentLocation, places})
export default connect(mapStateToProps, { getCurrentLocation })(Footer)
