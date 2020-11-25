import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './style/navs.css'

const Navs = ({ history }) => {



  return (
    <Fragment>
      <div className='navs'>
        <button className='nav' onClick={()=> history.push('/')}>
          <img src={require('./style/home.png')} height='30px' />
          <div className='text-button'>home</div>
        </button>
        <button className='nav' onClick={()=> history.push('/about-me')}>
          <img src={require('./style/woman.png')} height='30px' />
          <div className='text-button'>skills</div>
        </button>
        <button className='nav' onClick={()=> history.push('/experience')}>
          <img src={require('./style/goal.png')} height='30px' />
          <div className='text-button'>experience</div>
        </button>
        
        
        
      </div>
    </Fragment>
  )
}
export default withRouter(Navs)