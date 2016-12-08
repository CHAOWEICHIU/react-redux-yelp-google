import { expect } from 'chai'
import { ADD_ONE } from '../../src/actions/types'
import reducer from '../../src/reducers/active_num'

describe('active number reducer', ()=>{
  let input, output
  beforeEach(()=>{
    input = ''
    output = ''
  })

  it('init state', ()=>{
    input = reducer(undefined, {})
    output = 0
    expect(input).to.equal(output)
  })
  it('should return +1', ()=>{
    input = reducer(2, {
      type: ADD_ONE
    })
    output = 3
    expect(input).to.equal(output)
  })
})
