import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions'
import store from '../store'

const renderInput = field => {
  return (
  <div className="form-group">
    <input className="form-control form-control-lg" {...field.input} placeholder={`${field.name} (optional)`}/>
    { field.meta.error && field.meta.visited &&
      <div className="alert alert-danger">
        <span>{field.meta.error}</span>
      </div> }
  </div>
)}

const validate = values => {
  const errors = {}
  if(values.radius > 4000){
    errors.radius = 'Max is 4000'
  } else if (values.radius <= 0) {
    errors.radius = 'Min is 0'
  }
  return errors
}

const radiusCheck = num => !isNaN(num) ? num : ''

// const disableCondition = (){
//   //  condition 1 !currentLocation,
//   //  submitting
//   if return is 0
// }

// TODO disableCondition  ()

// TODO submitSucceeded && return ==== 0

const FilterForm = ({handleSubmit, invalid, submitting, fetchPlaces, currentLocation, anyTouched, places, submitSucceeded }) => {
  console.log(store.getState())
  if(submitSucceeded)return <div>Loading...</div>
  return (
  <form onSubmit={handleSubmit(data=>{fetchPlaces(data, currentLocation)})}>
    <Field name="term"
      component={renderInput}
      placeholder="Term" />

    <Field name="radius"
      normalize={radiusCheck}
      component={renderInput}
      placeholder="Radius" />

    <button type="sumbit"
      disabled={!currentLocation || invalid || submitting }
      className="btn btn-block btn-lg">
        {!currentLocation ? 'Loading current location ...' : 'Submit'}
      </button>

  </form>
)}

const FilterFormWithRedux = reduxForm({
  form: 'filter_form',
  validate
})(FilterForm)

const mapStateToProps = ({currentLocation, places}) => ({currentLocation,places})
export default connect(mapStateToProps,{ fetchPlaces })(FilterFormWithRedux)
