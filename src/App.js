import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import FrontPage from './FrontPage'
import Navs from './Navs'


const App = () => {




  return (
    <Fragment>
      <Router>
        <div className='main'>
          <Navs />
          <Switch>
            <Route exact path='/'>
              <FrontPage />
            </Route>
            <Route exact path='/about-me'>
              <About />
            </Route>
            <Route exact path='/experience'>
              <Experience />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}
export default App