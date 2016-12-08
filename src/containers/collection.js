import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/card'

const Collection = props => {
  if(!props.collection)return <div id="collection">NO!!!!</div>
  return (
    <div id="collection" className="col-lg-6 offset-lg-3 row">
      {props.collection.map(business=><Card key={business.id} business={business}/>)}
    </div>
  )
}

function mapStateToProps(state){
  return {
    collection: state.collection
  }
}

export default connect(mapStateToProps)(Collection)
