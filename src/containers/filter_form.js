import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions'
import LocationButton from './get_location_button'

const renderInput = field => {
  return (
  <div className="form-group">
    <input className="form-control form-control-lg" {...field.input} placeholder={field.name}/>
    { field.meta.error && field.meta.touched &&
      <div className="alert alert-danger">
        <span>{field.meta.error}</span>
      </div> }
  </div>
)}

const validate = values => {
  const errors = {}
  if(values.radius >= 4000){
    errors.radius = 'Max is 4000'
  } else if (values.radius <= 0) {
    errors.radius = 'Min is 0'
  }
  return errors
}

const radiusCheck = num => !isNaN(num) ? num : ''
const hasCurrentLocation = currentLocation => currentLocation === 'Get Current Location' ? true : false

const FilterForm = ({handleSubmit, invalid, submitting, fetchPlaces, currentLocation }) => {
  return (
  <form onSubmit={handleSubmit(data=>fetchPlaces(data, currentLocation))}>
    <Field name="term"
      component={renderInput}
      placeholder="Term" />

    <Field name="radius"
      normalize={radiusCheck}
      component={renderInput}
      placeholder="Radius" />

    <button type="sumbit"
      disabled={hasCurrentLocation(currentLocation)}
      className="btn btn-block btn-lg">
        {hasCurrentLocation(currentLocation)? 'Get Location First' : 'Submit'}
      </button>

    <LocationButton />
  </form>
)}


const FilterFormWithRedux = reduxForm({
  form: 'filter_form',
  validate
})(FilterForm)

function mapStateToProps(state){
  return {
    currentLocation: state.currentLocation
  }
}

export default connect(mapStateToProps,{ fetchPlaces })(FilterFormWithRedux)
