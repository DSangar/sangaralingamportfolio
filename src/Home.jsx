import React from 'react'
import Logo from './images/image4rb.png'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Home() {

    const [text]=useTypewriter({
        words:['UI/UX Developer', 'FullStack Developer','MERN Stack Developer', 'Web Designer'],
        loop:{},
        typeSpeed:120,
    })


  return (
    <section className="contact-scetion" id="Home">

        <div className="contaniner ">
            <br />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="wrapper">
                        <div className="row no-gutters">
                            <div className="col-md-6 " data-aos="flip-left" data-aos-duration="2500">
                                <div className="contact-wrap w100 p-lg-5 p-4">
                                <div className="container name-section">
                            <h1 data-aos-duration="4500" data-aos="fade-down-right" >Sangaralingam D</h1>
                            <h3>I'm a <span>{text}</span> 
                            <Cursor cursorStyle='"-"' /></h3>
                            <br />
                            <h6>Learn Every Day ...
                                Error make good Developer</h6>
                            <br />
                            

                                <button type="button" class="btn rounded-pill btn-outline-secondary">Let's Chat</button> 

                                <span className='homebutn'>
                                    
                                    <button type="button" class="btn btn-info rounded-pill" >Download CV</button>
                                </span>
                                

                                <div>
                                    <br />
                                    <br />
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    </button><span>         </span>
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-facebook"></i>
                                    </button><span>         </span>
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-twitter"></i>
                                    </button><span>         </span>
                                    <span>         </span>
                                    <button button type="button" class="btn btn-outline-info">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    </button><span>         </span>
                                </div>
                            
                        
                            
                        </div>

                    
                    
                
                                </div>
                            </div>
                            <div className="col-md-6  " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                              <div className="contact-wrap w100 p-lg-5 p-4">
                                <img className="Header-image img-fluid" src={Logo} alt="" srcset="" />
                                   
                                </div>

                            </div>

                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Home;