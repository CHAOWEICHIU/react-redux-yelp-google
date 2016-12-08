import React, { Component } from 'react'
import Card from '../components/card'
import Options from './options'
import { connect } from 'react-redux'

class Search extends Component {
  render(){
    if(this.props.places.length===0){
      return (
        <div id="search" className="col-lg-6 offset-lg-3">
          <div>Get started!</div>
        </div>
      )
    }
    return (
      <div id="search" className="col-lg-6 offset-lg-3">
        <Card business={this.props.places[0]}/>
        <Options />
      </div>
    )
  }
}
// if(!this.props.places)return <div>Get started!</div>

function mapStateToProps(state){
  return {
    places: state.places
  }
}
export default connect(mapStateToProps)(Search)
