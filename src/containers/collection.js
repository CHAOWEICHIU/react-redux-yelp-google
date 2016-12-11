import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/card'

export const Collection = ({collection}) => {
  return (
    <div id="collection" className="col-lg-6 offset-lg-3 row">
      {collection.map(business=><Card key={business.id} business={business}/>)}
    </div>
  )
}

const mapStateToProps = ({collection}) => ({collection})

export default connect(mapStateToProps)(Collection)
