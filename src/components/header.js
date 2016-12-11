import React from 'react'
import TopNav from './top_nav'

const navs = [
  {
    key:'search_nav',
    name:'search',
    icon:'fa fa-search fa-3x',
    className: 'btn btn-danger active btn-block sharp custom-header-btn'
  },
  {
    key:'collection_nav',
    name:'collection',
    icon:'fa fa-heart fa-3x',
    className: 'btn btn-danger active btn-block sharp custom-header-btn'
  }
]

const Header = () => (
  <nav className="nav navbar-fixed-top">
    <div className="row no-gutter">
      {navs.map(nav=><TopNav {...nav}/>)}
    </div>
  </nav>
)

export default Header
