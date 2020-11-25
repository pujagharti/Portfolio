import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './style/about.css'


const About = () => {


  return (
    <Fragment>

      <div className='about-content'>
        
        <div className='title'>Tech skills</div>

        <div className='about-article left1'>
          <div className='tech-space'>
            <div className='tech-article'>
              <h2>Tech goal</h2>
              
              <p>As a goal of Junior Developer position, I would like to showcase what I have, but also learn what will take me to the next level to become a true asset for the company. I would like to work in an established company committed to delivering excellent, innovative digital projects completed to the highest possible standards.</p>

            </div>
            <div className='tech-article second'>
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

          
          <div className='about-article right1'>
            <div className='lang'><span>HTML5</span>
              <div className='lang-box'>
                <span>Html 5</span>
                <p><a href='https://github.com/pujagharti/SEI50--project-1' >project: Shooter game</a></p>
              </div>
              <img src={require('./style/html-5.png')} className='language' width='64px' />
            </div>
          
            <div className='lang'><span>CSS3</span>
              <div className='lang-box'>
                <span>CSS 3</span>
                <p><a href='https://github.com/pujagharti/SEI50--project-1' >project: Shooter game</a></p>
                <p><a href='https://github.com/pujagharti/sei50-project-2-old-version' >project: Food life</a></p>
                <p><a href='https://github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/css.png')} className='language' width='64px' />
            </div>
            <div className='lang'><span>SASS</span>
              <div className='lang-box'>
                <span>SASS</span>
                <p><a href='https://github.com/pujagharti/sei-project-3' >project: Discover your Montreal</a></p>
              </div>
              <img src={require('./style/sass.png')} className='language' width='64px' />
            </div>
            <div className='lang'><span>JavaScript</span>
              <div className='lang-box'>
                <span>JavaScript</span>
                <p><a href='https://github.com/pujagharti/SEI50--project-1' >project: shooter game</a></p>
                <p><a href='https://github.com/pujagharti/sei50-project-2-old-version' >project: Food life</a></p>
                <p><a href='https://github.com/pujagharti/sei-project-3' >project: Discover your Montreal</a></p>
                <p><a href='https://github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/javascript.png')} className='language' width='64px' />
            </div>
            <div className='lang'><span>Node Js</span>
              <div className='lang-box'>
                <span>Node Js</span>
                <p><a href='https://github.com/pujagharti/sei50-project-2-old-version' >project: Food life</a></p>
                <p><a href='https://github.com/pujagharti/sei-project-3' >project: Discover your Montreal</a></p>
              </div>
              <img src={require('./style/nodejs.png')} className='language' width='64px' />
            
            </div>
            <div className='lang'><span>React Js</span>
              <div className='lang-box'>
                <span>React Js</span>
                <p><a href='github.com/pujagharti/sei50-project-2-old-version' >project: Food life</a></p>
                <p><a href='github.com/pujagharti/sei-project-3' >project: Discover your Montreal</a></p>
                <p><a href='github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/react.png')} className='language' width='64px' />
            
            </div>
            <div className='lang'><span>Python</span>
              <div className='lang-box'>
                <span>Python</span>
                <p><a href='github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/python.png')} className='language' width='64px' />
            
            </div>
            <div className='lang'><span>Django</span>
              <div className='lang-box'>
                <span>Django</span>
                <p><a href='github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/django.png')} className='language' width='64px' />
            
            </div>
            <div className='lang'><span>github</span>
              <div className='lang-box'>
                <span>Github</span>
                <p><a href='https://github.com/pujagharti/SEI50--project-1' >project: shooter game</a></p>
                <p><a href='https://github.com/pujagharti/sei50-project-2-old-version' >project: Food life</a></p>
                <p><a href='https://github.com/pujagharti/sei-project-3' >project: Discover your Montreal</a></p>
                <p><a href='https://github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/github.png')} className='language' width='64px' />
            
            
            </div>
            <div className='lang'><span>MongoDB</span>
              <div className='lang-box'>
                <span>Mongo DB</span>
                <p><a href='https://github.com/pujagharti/sei50-project-2-old-version' >project: Food life</a></p>
                <p><a href='https://github.com/pujagharti/sei-project-3' >project: Discover your Montreal</a></p>
              </div>
              <img src={require('./style/mongodb.png')} className='language' width='64px' />
              
            </div>
            <div className='lang'><span>MySQL</span>
              <div className='lang-box'>
                <span>MySQL</span>
                <p><a href='https://github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/mysql.png')} className='language' width='64px' />
              
            </div>
            <div className='lang'><span>PostgreSQL</span>
              <div className='lang-box'>
                <span>PostgreSQL</span>
                <p><a href='https://github.com/pujagharti/sei50-project4' >project: Emojis</a></p>
              </div>
              <img src={require('./style/postgresql.png')} className='language' width='64px' />
            
            </div>
            
          

          </div>
        </div>
        <div className='gap horizontal1'> <img src={require('./style/vertical-lines.png')} /> </div>



        <div className='about-article right2'>

          <h2 className='contact-header' >Contact</h2>

          <img src={require('./style/received_262920591228311.jpeg')} className='profile' />
          <div className='about-article left2' >
            <p><b>@</b> - gc.puja1@yahoo.com</p>
            <p><a href='linkedin.com/in/puja-gharti/'><img src={require('./style/linkedin.png')} width='19.5px' />  linkedin.com/in/puja-gharti</a></p>
            <p><a href='github.com/pujagharti'><img src={require('./style/github.png')} width='19.5px' />  github.com/pujagharti</a></p>

          </div>
        </div>

      </div>
    </Fragment>
  )
}
export default withRouter(About)