import { expect } from 'chai'
import * as actions from '../../src/actions'
import {
  SAVE_TO_COLLECTION,
  ADD_ONE
 } from '../../src/actions/types'

describe('action creators', ()=>{
  let input, output
  beforeEach(()=>{
    input = ''
    output = ''
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

})
