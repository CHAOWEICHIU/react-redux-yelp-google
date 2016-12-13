import React from 'react'
import { expect } from 'chai'
import { Collection } from '../../src/containers/collection'
import { shallow } from 'enzyme'
import Card from '../../src/components/card'

let minProps = {
  collection: [
    {id:'a'},
    {id:'c'}
  ]
}

describe('<Collection />', ()=>{
  it('render 2 <Card />', ()=>{
    expect(
      shallow(<Collection {...minProps} />).find(Card).length
    ).to.equal(2)
  })
})
