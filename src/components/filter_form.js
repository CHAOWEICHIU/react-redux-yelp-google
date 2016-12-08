import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const wow = function(a,b){
  console.log(b)
}

class FilterForm extends Component{
  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(wow)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <button type="submit">Submitt</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'filter'
})(FilterForm)
