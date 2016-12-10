import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions'
import store from '../store'
import axios from 'axios'
import qs from 'qs'

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
  }
  return errors
}

const radiusCheck = num => !isNaN(num) ? num : ''

const onFormSubmit = ({term='', radius}, currentLocation, fetchPlaces) => {
  const ROOT_URL = 'https://ccw-data-center.herokuapp.com/yelp/businesses/search?'
      , queryString = qs.stringify({
          term,
          radius,
          location: currentLocation
        })
  return axios.get(`${ROOT_URL}${queryString}`)
    .then(res=>fetchPlaces(res.data.businesses))
}

const FilterForm = ({
    handleSubmit,     // redux form
    invalid,          // redux form
    submitting,       // redux form
    submitted,        // redux form
    submitSucceeded,  // redux form
    anyTouched,       // redux form
    fetchPlaces,
    currentLocation,
    places
  }) => {
  if(submitting)return <div className="alert alert-info">Loading...</div>
  return (
  <div>
    {anyTouched && submitSucceeded && <div className="alert alert-warning"> No Result, Try Again! </div>}
    <form onSubmit={handleSubmit(data=>onFormSubmit(data, currentLocation, fetchPlaces))}>
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
  </div>
)}

const FilterFormWithRedux = reduxForm({
  form: 'filter_form',
  validate
})(FilterForm)

const mapStateToProps = ({currentLocation, places}) => ({currentLocation,places})
export default connect(mapStateToProps,{ fetchPlaces })(FilterFormWithRedux)
