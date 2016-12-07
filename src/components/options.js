import React from 'react'

const imgs = [
  {
    key: 'yes',
    className: 'img-fluid col-lg-4 offset-lg-2 col-xs-5 offset-xs-1',
    style: {paddingTop:'1em', paddingBottom:'1em'},
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/No_sign.svg/500px-No_sign.svg.png'
  },
  {
    key: 'no',
    className: 'img-fluid col-lg-4 col-xs-5',
    style: {paddingTop:'1em', paddingBottom:'1em'},
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/500px-Yes_Check_Circle.svg.png'
  }
]

const Options = () => (
  <div className="card-footer bg-inverse" >
    {imgs.map(img=><img {...img} />)}
  </div>
)

export default Options
