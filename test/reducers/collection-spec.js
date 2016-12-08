import { expect } from 'chai'
import reducer from '../../src/reducers/collection'
import { SAVE_TO_COLLECTION } from '../../src/actions/types'

describe('collection reducer', ()=>{
  let input, output
  beforeEach(()=>{
    input = ''
    output = ''
  })

  it('init state', ()=>{
    input = reducer(undefined, {})
    output = []
    expect(input).to.eql(output)
  })
  it('handle SAVE_TO_COLLECTION', ()=>{
    input = reducer([], {type:SAVE_TO_COLLECTION,payload:{name:'hotel', price:20}})
    output = [{name:'hotel', price:20}]
    expect(input).to.eql(output)
  })
  it('handle SAVE_TO_COLLECTION', ()=>{
    input = reducer([{name:'michigan', price:22}], {type:SAVE_TO_COLLECTION,payload:{name:'hotel', price:20}})
    output = [
      {name:'michigan', price:22},
      {name:'hotel', price:20}
    ]
    expect(input).to.eql(output)
  })
})
