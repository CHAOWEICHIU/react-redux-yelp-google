import React, { Component } from 'react'
import { connet } from 'react-redux'
import { addOne } from '../actions'

class Options extends Component{
  render(){
    return (
      <div className="card-footer bg-inverse">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/No_sign.svg/500px-No_sign.svg.png"
          style={{paddingTop:'1em', paddingBottom:'1em'}}
          className="img-fluid col-lg-4 offset-lg-2 col-xs-5 offset-xs-1"/>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/500px-Yes_Check_Circle.svg.png"
          style={{paddingTop:'1em', paddingBottom:'1em'}}
          className="img-fluid col-lg-4 col-xs-5"/>
      </div>
    )
  }
}

export default Options
