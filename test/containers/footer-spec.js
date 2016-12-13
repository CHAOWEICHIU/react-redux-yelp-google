import React from 'react'
import { expect } from 'chai'
import { Footer } from '../../src/containers/footer'
import { shallow } from 'enzyme'

describe('<Footer />', ()=>{
  it('should get current locaton before render', ()=>{
    console.log(shallow(<Footer />).debug())
  })
  it('should render proper location')
})
