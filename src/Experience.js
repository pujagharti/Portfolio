import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './style/experience.css'

const Experience = ({ history }) => {



  return (
    <Fragment>
      <div className="experience">

        <div className="corner" onClick={e=>history.push("/")}>
          <h1>Puja Gharti</h1>
          <span>
            {'{ Software Engineer }'}
            <hr />
          </span>
          
        </div>

        <div className="exp-title">
          Experience
        </div>

        <div className="box-exp box-exp-1">


          <div className="exp-article left-exp-1" style={{ marginTop: "30vh" }}>
          
          <div className="background-content">
              <div className="text-container">
              <div className="text-box">
                
                <div className="text-header"></div>
                <div className="param" >
                  <h1 >General Assembly Project 3: Emojis</h1>       
                  <img src={require('./style/exp/project4.png')} className="project-image" /> 
        
                  
                    This is a Django API and full-stack web application with a relational database to allow users to comment and like their favourite emojis. The index page is categorized with the type of emojis which will take users to the specific category they chose. The front -end was built with React and CSS.
                  
                    <a href="https://github.com/pujagharti/sei50-project4"><img src={require('./style/github.png')} className="course-icon" style={{width:"42px", height:"42px"}}  /></a>
                  </div>
              </div>
              </div>
            </div>
  
          </div>

          <div className="gap horizontal2"> <img src={require('./style/vertical-lines.png')} /> </div>


          <div className="exp-article left-exp-1">
          
          <div className="background-content">
              <div className="text-container">
              <div className="text-box">
                
                <div className="text-header"></div>
                <div className="param" >
                  <h1 >General Assembly Project 2: Discover your Montreal</h1>       
                  <img src={require('./style/exp/Montreal.png')} className="project-image" /> 
        
                  
                    This is a full-stack MERN app, with multiple relationships and CRUD functionality, allowing users to share, rate, and comment on attractions in and around the city of Montréal.
                    The front end was built using React JS and Semantic-react with custom CSS and backend using Node JS and Express API to serve data from a Mongo Database. I was working on the backend to get the fake user’s data and also on the Index page.
                    <a href="https://github.com/pujagharti/sei-project-3"><img src={require('./style/github.png')} className="course-icon" style={{width:"42px", height:"42px"}}  /></a>
                  
                  </div>
              </div>
              </div>
            </div>
  
          </div>

          <div className="gap horizontal2"> <img src={require('./style/vertical-lines.png')} /> </div>

          <div className="exp-article left-exp-1">
          
          <div className="background-content">
              <div className="text-container">
              <div className="text-box">
                
                <div className="text-header"></div>
                <div className="param" >
                  <h1 >General Assembly Project 2: Food Life - MERN project</h1>       
                  <img src={require('./style/exp/home.png')} className="project-image" /> 
        
                  A full-stack app using RESTful public API (Spoonacular). I used React JS and Bulma SASS for styling the component at the front end. The users can search the food with the types or from the search bar. I was focusing on getting the foods on the Index page, Navbar, and Styling.
                  <a href="https://github.com/pujagharti/sei50-project-2-old-version"><img src={require('./style/github.png')} className="course-icon" style={{width:"42px", height:"42px"}}  /></a>
                  </div>
              </div>
              </div>
            </div>
  
          </div>

          <div className="gap horizontal2"> <img src={require('./style/vertical-lines.png')} /> </div>

          <div className="exp-article left-exp-1" >
           

           <div className="background-content">
               <div className="text-container">
                 
               <div className="text-box">
                 
                 
                 <div className="text-header"></div>
                   <div className="param" >
                   <h1 >General Assembly Project 1: Shooter Game</h1>       
                   <img src={require('./style/exp/inner1.png')} className="project-image" /> 
         
                   A fully functional browser-based game similar to space invaders. It is built with HTML, CSS, and JavaScript. It is a single-player based game.
                   <a href="https://github.com/pujagharti/SEI50--project-1"><img src={require('./style/github.png')} className="course-icon" style={{width:"42px", height:"42px"}}  /></a>
                   </div>
                 
               </div>
               
               </div>
             </div>
   
           </div>




        </div>

      </div>
    </Fragment>
  )
}
export default withRouter(Experience)