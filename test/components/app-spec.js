import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../../src/components/app'
import Header from '../../src/components/header'
import Footer from '../../src/containers/footer'

describe.only('<App />', ()=>{
  it('Has <Header /> ',()=>{
    expect(
      shallow(<App />).find(Header)
    ).to.have.length(1)
  })
  it('Has <Footer /> ',()=>{
    expect(
      shallow(<App />).find(Footer)
    ).to.have.length(1)
  })
})
