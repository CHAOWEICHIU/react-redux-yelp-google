import { expect } from 'chai'
import * as actions from '../../src/actions'
import axios from 'axios'
import {
  SAVE_TO_COLLECTION,
  ADD_ONE,
  GET_CURRENT_LOCATION,
  FETCH_PLACES
 } from '../../src/actions/types'

describe('action creators', ()=>{
  let input, output, promise

  beforeEach(()=>{
    input = ''
    output = ''
    promise = ''
  })

  it('saveToCollection()', ()=>{
    input = actions.saveToCollection('good place')
    output = {
      type: SAVE_TO_COLLECTION,
      payload: 'good place'
    }
    expect(input).to.eql(output)
  })

  it('addOne()', ()=>{
    input = actions.addOne()
    output = { type: ADD_ONE }
    expect(input).to.eql(output)
  })

  it('getCurrentLocation() return a promise', ()=>{
    input = actions.getCurrentLocation({latitude:22, longitude:22})
    promise = axios.get('http://promise.com')
    output = {
      type: GET_CURRENT_LOCATION,
      payload: promise
    }
    expect(input).to.eql(output)
  })

  it('getCurrentLocation() return proper status code', (done)=>{
    input = 200
    actions.getCurrentLocation({latitude:22, longitude:22})
      .payload
      .then(res=>{
        expect(input).to.equal(res.status)
        done()
      })
  })

  it('fetchPlaces()', ()=>{
    input = actions.fetchPlaces(['a','b'])
    output = {
      type: FETCH_PLACES,
      payload: ['a','b']
    }
    expect(input).to.eql(output)
  })

})
