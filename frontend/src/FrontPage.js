import React, { Fragment, useEffect, useRef } from 'react'
import at from './style/at.png'
import academy from './style/codeacademy.jpg'
import sololearn from './style/sololearn.jpg'
import assembly from './style/1603135530380.jpg'
import linkedin from './style/linkedin.png'
import github from './style/github.png'






const FrontPage = () => {

  const article = useRef(null)
  const card = useRef(null)

  const title = useRef(null)
  const para = useRef(null)
  
  useEffect(() => {
    if ( article.current && card.current && para.current ) {
      
      article.current.addEventListener('mousemove', (e) => {
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 5;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 5;
        card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

        title.current.style.transform = `translateZ(0)`;
        para.current.style.transform = `translateZ(300px)`;
        
      });
      article.current.addEventListener('mouseenter', (e) => {
        
        card.current.style.transition = 'none';
        title.current.style.transform = `translateZ(0)`;
        para.current.style.transform = `translateZ(0)`;
        
      })

      article.current.addEventListener('mouseleave', (e) => {
        card.current.style.transition = 'all 0.5s ease-in';
        card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        
      });
    }
  }, [article, card])
  

  return (
    <Fragment>
      <div className="section" >
        
        
        
        <div className="article" ref={article}>
          <div className="card" ref={card} >
            <h1 ref={title}>Puja Gharti</h1>
            <span ref={para}>{'{ Software Engineer }'}</span>
            
            <div className="contact-section">
            <p>follow my social media:</p>
            <p>
            <img className="social" src={at} />
            <a href="https://github.com/pujagharti" target="_blank" ><img className="social" src={github} /></a>
            <a href="https://www.linkedin.com/in/puja-gharti/" target="_blank" ><img className="social" src={linkedin} /></a>
            </p>
            </div>
            
          </div>
        </div>

        <div className="background-content" style={{ width: "55%"}}>
              <div className="text-container">
                <hr className="topLiner" />
              <div className="text-box">
                <hr className="topLiner" />
                
                <div className="text-header"></div>
                <div className="param">
                    <h1>Hi, I am Puja.</h1>
                    <p>My background in the hospitality industry has given me an excellent
                    foundation of working in a team and problem-solving. I have always been keen
                    on how modern apps are built, and this curiosity, along with connecting with
                    software engineers in my network gave me a desire to pursue programming as
                    a career.</p>
                </div>
                <hr className="bottomLiner" />
              </div>
              <hr className="bottomLiner" />
              </div>
            </div>

            <div className="courses">
              
              <div className="course">
                <div className="info-box"><p>General Assembly</p></div>
                <a href="https://generalassemb.ly/" target="_blank" ><img src={assembly} width='32px' alt="General Assembly" /></a>
              </div>
              <div className="course">
                <div className="info-box"><p>Solo Learn</p></div>
              <a href="https://www.sololearn.com/" target="_blank" ><img src={sololearn} width='32px' alt="Solo Learn" /></a>
              </div>
              <div className="course">
                <div className="info-box"><p>Code Academy</p></div>
              <a href="https://www.codecademy.com/" target="_blank" ><img src={academy} width='32px' alt="Code Academy" /></a>
              </div>
              
            </div>
      </div>
    </Fragment>
  );
}
export default FrontPage