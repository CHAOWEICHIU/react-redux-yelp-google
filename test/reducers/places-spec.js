import { expect } from 'chai'
import { FETCH_PLACES } from '../../src/actions/types'
import reducer from '../../src/reducers/places'

 describe('places reducer', ()=>{
   let input, output
   beforeEach(()=>{
     input = ''
     output = ''
   })
   it('should return init state', ()=>{
     input = reducer(undefined, {})
     output = []
     expect(input).to.eql(output)
   })
   it('shoud handle FETCH_PLACES', ()=>{
     input = reducer([], {type:FETCH_PLACES, payload:{businesses:['a','b','c']}})
     output = ['a','b','c']
     expect(input).to.eql(output)
   })
   it('shoud handle FETCH_PLACES', ()=>{
     input = reducer(['a'], {type:FETCH_PLACES, payload:{businesses:['a','b','c']}})
     output = ['a','a','b','c']
     expect(input).to.eql(output)
   })

 })
