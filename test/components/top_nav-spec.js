import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import TopNav from '../../src/components/top_nav'

describe.only('<TopNav />', ()=>{
  const minProps = {
    name:'search',
    className:'good',
    icon:'fa'
  }
  it('contain <Link to="search" />', ()=>{
    expect(
      shallow(<TopNav {...minProps}/>).find('Link').prop('to')
    ).to.equal('search')
  })
  it('contain <i className="fa">', ()=>{
    expect(
      shallow(<TopNav {...minProps}/>).find('i').prop('className')
    ).to.equal('fa')
  })
})
