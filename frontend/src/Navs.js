import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import home from './style/home.png'
import skills from './style/woman.png'
import goal from './style/goal.png'



const Navs = ({ history }) => {



  return (
    <Fragment>
      <div className="navs">
        <button className="nav" onClick={e=> history.push('/')}>
          <img src={home} height="30px" />
          <span>HOME</span>
        </button>
        <button className="nav" onClick={e=> history.push('/about-me')}>
          <img src={skills} height="30px" />
          <span>SKILLS</span>
        </button>
        <button className="nav" onClick={e=> history.push('/experience')}>
          <img src={goal} height="30px" />
          <span>WORK</span>
        </button>
        
        
        
      </div>
    </Fragment>
  )
}
export default withRouter(Navs)