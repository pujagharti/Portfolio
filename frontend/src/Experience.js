import React, { Fragment, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'

import project4 from './style/exp/project4.png'
import github from './style/github.png'
import vertical from './style/vertical-lines.png'
import montreal from './style/exp/Montreal.png'
import linkedin from './style/linkedin.png'
import photo from './style/received_262920591228311.jpeg'
import inner from './style/exp/inner1.png'
import foodlife from './style/exp/home.png'




const Experience = () => {


  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const param1 = useRef(null)
  const param2 = useRef(null)
  const param3 = useRef(null)
  const param4 = useRef(null)



  const handleScroll = () => {
    console.log(window.scrollX, window.scrollY)
    if (box1.current) {
      box1.current.style.transition = 'all 0.6s ease-in'

      if (window.scrollY <= 400) {
        param1.current.style.background = 'rgba(184, 176, 167, 0.5)'
        box1.current.style.transform = 'scale(1)'
      } else {
        param1.current.style.background = 'none'
        box1.current.style.transform = 'scale(0.9)'
      }
    }
    
    if (box2.current) {
      box2.current.style.transition = 'all 0.6s ease-in'

      if (window.scrollY >= 500 && window.scrollY <= 1200) {
        param2.current.style.background = 'rgba(184, 176, 167, 0.5)'
        box2.current.style.transform = 'scale(1)'
      } else {
        param2.current.style.background = 'none'
        box2.current.style.transform = 'scale(0.9)'
      }
    }
    
    if (box3.current) {
      box3.current.style.transition = 'all 0.6s ease-in'

      if (window.scrollY >= 1400 && window.scrollY <= 2000) {
        param3.current.style.background = 'rgba(184, 176, 167, 0.5)'
        box3.current.style.transform = 'scale(1)'
      } else {
        param3.current.style.background = 'none'
        box3.current.style.transform = 'scale(0.9)'
      }
    }
    
    if (box4.current) {
      box4.current.style.transition = 'all 0.6s ease-in'

      if (window.scrollY >= 2000) {
        param4.current.style.background = 'rgba(184, 176, 167, 0.5)'
        box4.current.style.transform = 'scale(1)'
      } else {
        param4.current.style.background = 'none'
        box4.current.style.transform = 'scale(0.9)'
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Fragment>
      <div className="experience" onScroll={e=> handleScroll(e)}>

        

        <div className="exp-title">
          Work Experience
        </div>

        <div className="box-exp box-exp-1">


          <div className="exp-article left-exp-1 box-project4" style={{ marginTop: '30vh' }} >
            <img src={project4} className="project-image" /> 
          
            <div className="background-content" ref={box1}>
              <div className="text-container">
                <div className="text-box">
                  
                  <div className="text-header"></div>
                  <div className="param" ref={param1}>
                    <h1 >General Assembly Project 4: Emojis</h1>       
                    
                    
                      A Django API and full-stack web application with a relational database to allow users to comment and like their favourite emojis. The index page is categorized with the type of emojis which will take users to the specific category they chose. The frontend was built with React and CSS.
                    
                    <a href="https://github.com/pujagharti/sei50-project4"><img src={github} className="course-icon" style={{width:"52px", height:"52px"}}  /></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>

          <div className="gap horizontal2"> <img src={vertical} /> </div>


          <div className="exp-article left-exp-1 box-montreal" >
            <img src={montreal} className="project-image" />
            <div className="background-content" ref={box2}>
              <div className="text-container">
                <div className="text-box">
                  
                  <div className="text-header"></div>
                  <div className="param" ref={param2}>
                    <h1 >General Assembly Project 3: Discover your Montreal</h1>      
        
                  
                    A full-stack MERN app, with multiple relationships and CRUD functionality, allowing users to share, rate, and comment on attractions in and around the city of Montréal.
                    The frontend was built using React JS and Semantic-react with custom CSS and backend using Node JS and Express API to serve data from a Mongo Database. I was working on the backend to get the fake user’s data and also on the Index page.
                    <a href="https://github.com/pujagharti/sei-project-3"><img src={github} className="course-icon" style={{width:"52px", height:"52px"}}  /></a>
                  
                  </div>
                </div>
              </div>
            </div>
  
          </div>

          <div className="gap horizontal2"> <img src={vertical} /> </div>

          <div className="exp-article left-exp-1 box-foodlife">
            <img src={foodlife} className="project-image" /> 
          
            <div className="background-content" ref={box3}>
              <div className="text-container">
                <div className="text-box">
                  
                  <div className="text-header"></div>
                  <div className="param" ref={param3}>
                    <h1 >General Assembly Project 2: Food Life - MERN project</h1>       
                    
                    A full-stack app using RESTful public API (Spoonacular). I used React JS and Bulma SASS for styling the component at the frontend. The users can search the food with the types or from the search bar. I was focusing on getting the foods on the Index page, Navbar, and Styling.
                    <a href="https://github.com/pujagharti/sei50-project-2-old-version"><img src={github} className="course-icon" style={{width:"52px", height:"52px"}}  /></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>

          <div className="gap horizontal2"> <img src={vertical} /> </div>

          <div className="exp-article left-exp-1 box-shootergame" >
            <img src={inner} className="project-image" /> 
          

            <div className="background-content" ref={box4}>
              <div className="text-container">
                  
                <div className="text-box">
                  
                  
                  <div className="text-header"></div>
                  <div className="param" ref={param4} >
                    <h1 >General Assembly Project 1: Shooter Game</h1>       
                    
                    A fully functional browser-based game similar to space invaders. It is built with HTML, CSS, and JavaScript. It is a single-player based game.
                    <a href="https://github.com/pujagharti/SEI50--project-1"><img src={github} className="course-icon" style={{width:"52px", height:"52px"}}  /></a>
                  </div>
                  
                </div>
                
              </div>
            </div>
    
          </div>


          <div className="gap horizontal2"> <img src={vertical} /> </div>


          <div className="about-article right2">

            <h2 className='contact-header' >Contact</h2>

            <img src={photo} className="profile" />
            <div className="about-article left2" >
              <p><b>@</b> - gc.puja1@yahoo.com</p>
              <p><a href="https://www.linkedin.com/in/puja-gharti/" target="_blank" ><img src={linkedin} width="19.5px" /> - linkedin.com/in/puja-gharti</a></p>
              <p><a href="https://github.com/pujagharti" target="_blank" ><img src={github} width="19.5px" /> - github.com/pujagharti</a></p>

            </div>
          </div>



        </div>

      </div>
    </Fragment>
  )
}
export default withRouter(Experience)