import React from 'react'

const Header = () => (
  <nav className="nav navbar-fixed-top">
    <div className="row no-gutter">
      <div className="col-xs-6">
        <a className="btn btn-danger active btn-block sharp custom-header-btn">
          <i className="fa fa-search fa-5x"></i>
        </a>
      </div>
      <div className="col-xs-6">
        <a className="btn btn-danger active btn-block sharp custom-header-btn">
          <i className="fa fa-heart fa-5x"></i>
        </a>
      </div>
    </div>
  </nav>
)

export default Header
