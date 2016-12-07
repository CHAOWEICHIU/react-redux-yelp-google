import React from 'react'
import { Link } from 'react-router'

const navs = [
  {
    name:'search',
    icon:'fa fa-search fa-5x',
    class: 'btn btn-danger active btn-block sharp custom-header-btn'
  },
  {
    name:'collection',
    icon:'fa fa-heart fa-5x',
    class: 'btn btn-danger active btn-block sharp custom-header-btn'
  }
]

const Header = () => (
  <nav className="nav navbar-fixed-top">
    <div className="row no-gutter">
      {renderNavs(navs)}
    </div>
  </nav>
)

const renderNavs = navs => navs.map(nav=>(
  <div className="col-xs-6" key={nav.name}>
    <Link to={nav.name} className={nav.class}>
      <i className={nav.icon}></i>
    </Link>
  </div>
))

export default Header
