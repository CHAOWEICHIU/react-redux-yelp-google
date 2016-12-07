import React, { Component } from 'react'
import Card from '../components/card'
import Options from '../components/options'
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



// const business = {
//   "is_closed": false,
//   "id": "selden-standard-detroit",
//   "distance": 2683.8968008019997,
//   "price": "$$",
//   "phone": "+13134385055",
//   "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/y53hAcevoDGDU4Y5D2uD_w/o.jpg",
//   "coordinates": {
//     "longitude": -83.06499,
//     "latitude": 42.34779
//   },
//   "rating": 4.5,
//   "name": "Selden Standard",
//   "location": {
//     "address1": "3921 2nd Ave",
//     "address2": "",
//     "state": "MI",
//     "zip_code": "48201",
//     "address3": "",
//     "country": "US",
//     "city": "Detroit"
//   },
//   "url": "https://www.yelp.com/biz/selden-standard-detroit?adjust_creative=hgqmB6pYczqL84-4y4RYcw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=hgqmB6pYczqL84-4y4RYcw",
//   "review_count": 559,
//   "categories": [
//     {
//       "title": "American (New)",
//       "alias": "newamerican"
//     },
//     {
//       "title": "Food",
//       "alias": "food"
//     }
//   ]
// }
