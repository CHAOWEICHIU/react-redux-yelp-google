import React, { Component } from 'react'
import Card from '../components/card'
import Options from '../components/options'
import { connect } from 'react-redux'
import { addOne, saveToCollection } from '../actions'
import FilterForm from './filter_form'

class Search extends Component {
  render(){
    if(this.props.places.length===0){
      return (
        <div id="search" className="col-lg-6 offset-lg-3">
          <FilterForm />
        </div>
      )
    }
    const { places, activeNum, addOne, saveToCollection } = this.props
    return (
      <div id="search" className="row col-lg-6 offset-lg-3">
        <Card business={places[activeNum]}/>
        <Options
          addOne={addOne}
          saveToCollection={saveToCollection}
          place={places[activeNum]}/>
      </div>
    )
  }
}

const mapStateToProps = ({places, activeNum}) => ({places, activeNum})
export default connect(mapStateToProps, { addOne, saveToCollection })(Search)
