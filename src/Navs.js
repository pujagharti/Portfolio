import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './style/navs.css'

const Navs = ({ history }) => {



  return (
    <Fragment>
      <div className="navs">
        <button className="nav" onClick={e=> history.push('/')}>
          <img src={require('./style/home.png')} height="30px" />
          <span>HOME</span>
        </button>
        <button className="nav" onClick={e=> history.push('/about-me')}>
          <img src={require('./style/woman.png')} height="30px" />
          <span>SKILLS</span>
        </button>
        <button className="nav" onClick={e=> history.push('/experience')}>
          <img src={require('./style/goal.png')} height="30px" />
          <span>WORK</span>
        </button>
        
        
        
      </div>
    </Fragment>
  )
}
export default withRouter(Navs)