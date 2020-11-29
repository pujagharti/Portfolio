import React, { Fragment, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'

import html5 from './style/html-5.png'
import css3 from './style/css.png'
import django from './style/django.png'
import sass from './style/sass.png'
import github from './style/github.png'
import linkedin from './style/linkedin.png'
import photo from './style/received_262920591228311.jpeg'
import javascript from './style/javascript.png'
import nodejs from './style/nodejs.png'
import vertical from './style/vertical-lines.png'
import postgre from './style/postgresql.png'
import mysql from './style/mysql.png'
import mongodb from './style/mongodb.png'
import python from './style/python.png'
import reactjs from './style/react.png'






const About = () => {

  const article1 = useRef(null)
  const article2 = useRef(null)
  
  const handleScroll = () => {
    console.log(window.scrollX, window.scrollY)
    if (article1.current) {
      article1.current.style.transition = 'all 0.6s ease-in'

      if (window.scrollY <= 350) {
        article1.current.style.background = 'rgba(184, 176, 167, 0.5)'
        article1.current.style.color = '#fff'
        article1.current.style.transform = 'scale(1)'
      }
      else {
        article1.current.style.background = 'none'
        article1.current.style.color = '#000'
        article1.current.style.transform = 'scale(0.9)'
      }
    }

    if (article2.current) {
      
      article2.current.style.transition = 'all 0.6s ease-in'
      if (window.scrollY >= 200 && window.scrollY <= 850) {
        article2.current.style.background = 'rgba(184, 176, 167, 0.5)'
        article2.current.style.color = '#fff'
        article2.current.style.transform = 'scale(1)'
      } else {
        article2.current.style.background = 'none'
        article2.current.style.color = '#000'
        article2.current.style.transform = 'scale(0.9)'
      }
    }

  }

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <Fragment>

      <div className="about-content" onScroll={e=> handleScroll(e)}>
        
        <div className="title" >Tech skills</div>

        <div className="about-article left1" >
          <div className="tech-space">
            <div className="tech-article" ref={article1}>
              <h2>Tech goal</h2>
              
              <p>As a goal of Junior Developer position, I would like to showcase what I have, but also learn what will take me to the next level to become a true asset for the company. I would like to work in an established company committed to delivering excellent, innovative digital projects completed to the highest possible standards.</p>

            </div>
            <div className="tech-article second" ref={article2}>
              <h2>Learning skills</h2>
              
              <p>Taking SoloLearn and Codecademy online courses were my first step toward
                  programming that gave me a grip on practising and understanding the basic
                  knowledge of programming languages. This is where I got a real taste of coding
                  and enjoyed doing it. </p>
              <br />
              <p>To further develop my practical programming skills in a
                collaborative environment, I enrolled myself in the Software Engineering
                Immersive Course at General Assembly. The course was of 12 weeks full-time
                coding remotely. Studying this course has given me a solid base of
                fundamental programming languages and the technologies throughout the
                course. We expanded our repertoire of programming languages and started
                coding collaboratively. Gained expertise with modern software engineering
                tools and frameworks.
              </p>
            
            
            </div>
          </div>

          
          <div className="about-article right1">
            <div className="lang"><span>HTML5</span>
              <div className="lang-box">
                <span>Html 5</span>
                <p><a href="https://github.com/pujagharti/SEI50--project-1" target="_blank" >Shooter game</a></p>
              </div>
              <img src={html5} className="language" width="64px" />
            </div>
            
            <div className="lang"><span>CSS3</span>
              <div className="lang-box">
                <span>CSS 3</span>
                <p><a href="https://github.com/pujagharti/SEI50--project-1" target="_blank" >Shooter game</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project-2-old-version" target="_blank" >Food life</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={css3} className="language" width="64px" />
            </div>
            <div className="lang"><span>SASS</span>
              <div className="lang-box">
                <span>SASS</span>
                <p><a href="https://github.com/pujagharti/sei-project-3" target="_blank" >Discover your Montreal</a></p>
              </div>
              <img src={sass} className="language" width="64px" />
            </div>
            <div className="lang"><span>JavaScript</span>
              <div className="lang-box">
                <span>JavaScript</span>
                <p><a href="https://github.com/pujagharti/SEI50--project-1" target="_blank" >shooter game</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project-2-old-version" target="_blank" >Food life</a></p>
                <p><a href="https://github.com/pujagharti/sei-project-3" target="_blank" >Discover your Montreal</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={javascript} className="language" width="64px" />
            </div>
            <div className="lang"><span>Node Js</span>
              <div className="lang-box">
                <span>Node Js</span>
                <p><a href="https://github.com/pujagharti/sei50-project-2-old-version" target="_blank" >Food life</a></p>
                <p><a href="https://github.com/pujagharti/sei-project-3" target="_blank" >Discover your Montreal</a></p>
              </div>
              <img src={nodejs} className="language" width="64px" />
              
            </div>
            <div className="lang"><span>React Js</span>
              <div className="lang-box">
                <span>React Js</span>
                <p><a href="https://github.com/pujagharti/sei50-project-2-old-version" target="_blank" >Food life</a></p>
                <p><a href="https://github.com/pujagharti/sei-project-3" target="_blank" >Discover your Montreal</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={reactjs} className="language" width="64px" />
            
            </div>
            <div className="lang"><span>Python</span>
              <div className="lang-box">
                <span>Python</span>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={python} className="language" width="64px" />
            
            </div>
            <div className="lang"><span>Django</span>
              <div className="lang-box">
                <span>Django</span>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={django} className="language" width="64px" />
            
            </div>
            <div className="lang"><span>github</span>
              <div className="lang-box">
                <span>Github</span>
                <p><a href="https://github.com/pujagharti/SEI50--project-1" target="_blank" >shooter game</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project-2-old-version" target="_blank" >Food life</a></p>
                <p><a href="https://github.com/pujagharti/sei-project-3" target="_blank" >Discover your Montreal</a></p>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={python} className="language" width="64px" />
            
            
            </div>
            <div className="lang"><span>MongoDB</span>
              <div className="lang-box">
                <span>Mongo DB</span>
                <p><a href="https://github.com/pujagharti/sei50-project-2-old-version" target="_blank" >Food life</a></p>
                <p><a href="https://github.com/pujagharti/sei-project-3" target="_blank" >Discover your Montreal</a></p>
              </div>
              <img src={mongodb} className="language" width="64px" />
            
            </div>
            <div className="lang"><span>MySQL</span>
              <div className="lang-box">
                <span>MySQL</span>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={mysql} className="language" width="64px" />
            
            </div>
            <div className="lang"><span>PostgreSQL</span>
              <div className="lang-box">
                <span>PostgreSQL</span>
                <p><a href="https://github.com/pujagharti/sei50-project4" target="_blank" >Emojis</a></p>
              </div>
              <img src={postgre} className="language" width="64px" />
            
            </div>
            
            

          </div>
        </div>
        <div className="gap horizontal1"> <img src={vertical} /> </div>
       


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
    </Fragment>
  )
}
export default withRouter(About)