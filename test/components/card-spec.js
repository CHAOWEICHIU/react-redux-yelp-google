import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Card from '../../src/components/card'

describe('<Card />', ()=>{
  const minProps = {
    key: '22',
    business:
      {
        name: 'good',
        categories: [{title:'a'}, {title:'b'}],
        phone: '222',
        image_url: 'example.jpg',
        distance: 2222,
        location:
          {
            address1: 'pintiac',
            city: 'michigan',
            state: 'mi',
            zip_code: 48326
          }
      }
  }
  it('renders without exploding', ()=>{
    expect(
      shallow(
        <Card {...minProps}/>
      ).length
    ).is.equal(1)
  })
  it('contains <section id="card" />', ()=>{
    expect(
      shallow(
        <Card {...minProps}/>
      ).find('section').prop('id')
    ).to.equal('card')
  })
  it('contains <img src="example.jpg">', ()=>{
    expect(
      shallow(
        <Card {...minProps}/>
      ).find('img').prop('src')
    ).to.equal('example.jpg')
  })
  it('distance in miles', ()=>{
    expect(
      shallow(
        <Card {...minProps}/>
      ).find('div').at(2).text()
    ).to.equal('Distance 1.4 miles')
  })
  it('business infor', ()=>{
    expect(
      shallow(
        <Card {...minProps}/>
      ).find('div')
       .at(1)
       .contains(<a href="/"><h2 className="card-title text-white">good</h2></a>)
    ).to.equal(true)
  })
})
