import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Header from '../../src/components/header'

describe('<Header />', ()=>{
  it('contains <nav className="nav navbar-fixed-top" />', ()=>{
    expect(
      shallow(<Header />).find('nav').prop('className')
    ).to.equal('nav navbar-fixed-top')
  })
  it('contains <div className="row no-gutter" />', ()=>{
    expect(
      shallow(<Header />).find('div').prop('className')
    ).to.equal('row no-gutter')
  })
  it('contains <nav>', ()=>{
    expect(
      shallow(<Header />).find('TopNav').length
    ).to.equal(2)
  })
})
