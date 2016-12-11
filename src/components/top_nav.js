import React from 'react'
import { Link } from 'react-router'

const TopNav = ({name, className, icon}) => (
  <div className="col-xs-6">
    <Link to={name} className={className}>
      <i className={icon} style={{color:'white'}}></i>
    </Link>
  </div>
)

export default TopNav
