import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions'

const renderInput = field => {
  return (
  <div>
    <label>{field.placeholder}</label>
    <input {...field.input} />
    {field.meta.error && field.meta.touched && <span>{field.meta.error}</span>}
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


const FilterForm = ({handleSubmit, invalid, submitting, fetchPlaces, currentLocation }) => {
  return (
  <form onSubmit={handleSubmit(data=>fetchPlaces(data, currentLocation))}>
    <Field name="term" component={renderInput} placeholder="Term" />
    <Field normalize={radiusCheck} name="radius" component={renderInput} placeholder="Radius" />
    <button type="sumbit">sumbit</button>
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
