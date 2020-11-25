import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {




  return (
    <Fragment>
      <header className="header">
      
      <p><Link to="/">{" home "}</Link></p><p><Link to="/about-me">{" about me "}</Link></p><p><Link to="/experience">{" my experience "}</Link></p>
      </header>

      <div className="webnav">
      
      </div>
    </Fragment>
  )
}
export default Header