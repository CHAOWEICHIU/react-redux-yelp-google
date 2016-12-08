import { expect } from 'chai'
import reducer from '../../src/reducers/current_location'
import { GET_CURRENT_LOCATION } from '../../src/actions/types'

describe('current location reducer', ()=>{
  let input, output
  beforeEach(()=>{
    input = ''
    output = ''
  })

  it('should handle init state', ()=>{
    input = reducer(undefined, {})
    output = 'Get Current Location'
    expect(input).to.equal(output)
  })
  it('should handle GET_CURRENT_LOCATION', ()=>{
    input = reducer(undefined, {
      type:GET_CURRENT_LOCATION,
      payload:{results:[{address_components:[null,null,{long_name:'michigan'},{short_name:'MI'}]}]}
    })
    output = 'michigan, MI'
    expect(input).to.equal(output)
  })
})
